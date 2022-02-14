import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({cards, seachPhrase}, columnId) => cards
  .filter(card => card.columnId === columnId && strContains(card.title, seachPhrase));
export const getAllColumns = ({ columns }) => columns;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnByList = ({ columns }, listId) => columns.filter(column => column.listId === listId);
export const getAllLists = ({ lists }) => lists;
export const getFavoriteCards = ({ cards }) => cards.filter(card => card.isFavorite);

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCart = payload => ({ type: 'ADD_CARD', payload });
export const addList = payload => ({ type: 'ADD_LIST', payload })
export const addSearchPhrase = payload => ({ type: 'ADD_SEARCH_PHRASE', payload });
export const resetSearchPhrase = payload => ({ type: 'RESET_SEARCH_PHRASE', payload });
export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid(), isFavorite: false }] };
    default:
      return state;
    case 'ADD_SEARCH_PHRASE':
      return { ...state, seachPhrase: action.payload };
    case 'RESET_SEARCH_PHRASE':
      return { ...state, seachPhrase: action.payload };
    case 'ADD_LIST':
      return { ...state, lists: [...state.lists, { ...action.payload, id: shortid() }] };
    case 'TOGGLE_CARD_FAVORITE':
      return {...state, cards: state.cards.map(card => (card.id === action.payload) ? {...card, isFavorite: !card.isFavorite} : card)}
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;