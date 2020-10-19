import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';


describe('Component TripSummary', () => {
  it('should render correct image src and alt', () => {
    const expectedImage = 'image.jpg';
    const expectedAlt = 'SampleName';
    const component = shallow(<TripSummary image={expectedImage} name={expectedAlt} id='abc' cost='$123' days={2} tags={[]} intro='intro' />);
    console.log(component.debug());
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('link is correct', () => {
    const component = shallow(<TripSummary id={'abc'} image='image.jpg' name='SampleName' cost='$123' days={2} tags={[]} intro='intro'  /> );
    expect(component.find('Link').prop('to')).toEqual('/trip/abc');
  });

  it('should render correct propTypes name, cost, days',() => {
    const expectedName = 'SampleName';
    const expectedCost = '$147';
    const expectedDays = 5;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} image='image.jpg' id='abc' tags={[]} intro='intro' />);
    console.log(component.debug());
    const renderedName = component.find('.title').text();
    const renderedDays = component.find('.details').childAt(0).text();
    const renderedCost = component.find('.details').childAt(1).text();
    expect(renderedName).toEqual(expectedName);
    expect(renderedDays).toEqual(expectedDays);
    expect(renderedCost).toEqual(expectedCost);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should renders correct tags', () => {
    const tag = ['firstTag', 'secondTag', 'thirdTag'];
    const component = shallow(<TripSummary tags={tag} name='SampleName' cost='$123' days={2} image='image.jpg' id='abc' intro='intro' />);
    console.log(component.debug());
    expect(component.find('.tag').at(0)).toEqual[tag[0]];
    expect(component.find('.tag').at(1)).toEqual[tag[1]];
    expect(component.find('.tag').at(2)).toEqual[tag[2]];
  });

});
