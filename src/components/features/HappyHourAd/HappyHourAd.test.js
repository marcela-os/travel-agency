import React from 'react';
import { shallow } from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'Happy Hour!',
  promoDescription: 'Lorem ipsum dolor sit amet',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render heading and description', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });

  it('should render with correct title', () => {
    const component = shallow(<HappyHourAd {...mockProps} />);
    expect(component.find(select.title).text()).toEqual(mockProps.title);
  });
});

const trueDate = Date;

const mockDate = customDate => class extends Date {  //ta klasa roszerza klasę Date, a więc w tym momencie będzie działać dokładnie tak samo jak Date. Można zdefiniować anonimową klasę i przypisać ją do zmiennej lub stałej. Dzięki temu dbamy o zakres zmiennych – nasza klasa mockDate ma istnieć tylko w tym bloku describe. Zamiana pózniej na funkcje
  constructor(...args) {  //jeśli podano jakieś argumenty, to zostanie wywołany konstruktor Date (czyli super) z tymi argumentami. W przeciwnym wypadku, wywołamy go z argumentem w postaci daty, którą chcemy zwracać super(customDate).
    if(args.length){
      super(...args);		//super - odwołuje się do konstruktora klasy-rodzica (w tym przypadku Date)
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){ //metoda now jest to metoda statyczna (static), co oznacza, że nie będziemy jej wywoływać na instancji klasy mockDate, ale na tej klasie samej w sobie. Innymi słowy, będzie wywoływana jako mockDate.now()
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`); //podmieniać Date na mockDate abyśmy w kolejnych testach mogli używać pradziwej klasy Date

    const component = shallow(<HappyHourAd {...mockProps} />);
    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};

describe('Component HappyHourAd with mocked Date', () => {
  checkDescriptionAtTime('11:57:58', '122');
  checkDescriptionAtTime('11:59:59', '1');
  checkDescriptionAtTime('13:00:00', 23 * 60 * 60 + '');
});

const checkDescriptionAfterTime = (time, delaySeconds, expectedDescription) => {
  it(`should show correct value ${delaySeconds} seconds after ${time}`, () => {
    jest.useFakeTimers(); //1
    global.Date = mockDate(`2019-05-14T${time}.135Z`);

    const component = shallow(<HappyHourAd {...mockProps} />);

    const newTime = new Date(); 																			//pobieramy "aktualną" datę i godzinę – wcześniej podmieniliśmy Date na klasę, która zawsze zwróci nam tę samą godzinę
    newTime.setSeconds(newTime.getSeconds() + delaySeconds); 					//modyfikujemy tę godzinę, dodając do niej wartość argumentu delaySeconds
    global.Date = mockDate(newTime.getTime()); 												//podmieniamy Date na nowy mock ze zmienioną godziną. Dzięki temu od teraz Date będzie zwracał czas późniejszy o tyle sekund, ile podaliśmy w argumencie delaySeconds

    jest.advanceTimersByTime(delaySeconds * 1000); 										// ta linia odpowiedzialna jest za kontrolę biegu czasu w JSie. Za pomocą metody advanceTimersByTime przyspieszamy bieg czasu aby wykonało się kolejne odświeżenie komponentu.

    const renderedTime = component.find(select.promoDescription).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
    jest.useRealTimers(); //2
    //Dzięki dodaniu 1 i 2 bieg czasu w JSie, wykonywanym pomiędzy tymi liniami, będzie kontrolowany przez Jesta.
  });
};

describe('Component HappyHourAd with mocked Date and delay', () => {
  checkDescriptionAfterTime('11:57:58', 2, '120');
  checkDescriptionAfterTime('11:59:58', 1, '1');
  checkDescriptionAfterTime('13:00:00', 60 * 60, 22 * 60 * 60 + '');
});
