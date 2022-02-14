// actions
const createActionName = actionName => `app/searchPhrase/${actionName}`;
const ADD_SEARCH_PHRASE = createActionName('ADD_SEARCH_PHRASE');
const RESET_SEARCH_PHRASE = createActionName('RESET_SEARCH_PHRASE');

// action creators
export const addSearchPhrase = payload => ({ type: ADD_SEARCH_PHRASE, payload });
export const resetSearchPhrase = payload => ({ type: RESET_SEARCH_PHRASE, payload });

const searchPhraseReducer = (statePart = '', action) => {
  switch(action.type) {
    case ADD_SEARCH_PHRASE:
      return action.payload
    case RESET_SEARCH_PHRASE:
      return action.payload
    default:
      return statePart;
  }
}

export default searchPhraseReducer;