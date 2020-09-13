/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
//export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const CHANGE_DURATION_FROM = createActionName('CHANGE_DURATION_FROM');
export const CHANGE_DURATION_TO = createActionName('CHANGE_DURATION_TO');
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
//export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });
export const changeDurationFrom = payload => ({ payload, type: CHANGE_DURATION_FROM });
export const changeDurationTo = payload => ({ payload, type: CHANGE_DURATION_TO });
export const createActionAddTag = payload => ({ payload, type: ADD_TAG });
export const createActionRemoveTag = payload => ({ payload, type: REMOVE_TAG });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    //case CHANGE_DURATION:
      // return {
      //...statePart,
      //duration: action.payload,
      //};
    case CHANGE_DURATION_FROM:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          from: action.payload},
      };
    case CHANGE_DURATION_TO:
      return {
        ...statePart,
        duration: {
          ...statePart.duration,
          to: action.payload},
      };
    case ADD_TAG:
      return {
        ...statePart,
        tags: action.payload,
      }; // nie jestem pewna co tu powinno być
    case REMOVE_TAG:
      return {
        ...statePart,
        tags: action.payload,
      }; // nie jestem pewna co tu powinno być
    default:
      return statePart;
  }
}
