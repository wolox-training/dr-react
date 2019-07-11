import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return { ...state, books: action.payload, originalData: action.payload };
    case actions.ADD_TO_CART:
      return { ...state, bookSelected: [...state.bookSelected, action.payload] };
    case actions.ADD_ITEM: {
      const books = [...state.bookSelected];
      const addItem = books.find(book => book.id === action.payload);
      if (addItem) {
        addItem.quantity += 1;
      }
      return { ...state, bookSelected: books };
    }
    case actions.REMOVE_ITEM: {
      const bookSelected = state.bookSelected.filter(book => book.id !== action.payload);
      return { ...state, bookSelected };
    }
    case actions.SUBTRACT_ITEM: {
      const books = [...state.bookSelected];
      const substractItem = books.find(book => book.id === action.payload);
      if (substractItem) {
        substractItem.quantity -= 1;
      }
      return { ...state, bookSelected: books };
    }
    case actions.SEARCH_ITEM: {
      const books = [...state.originalData];
      const searchBooks = books.filter(
        book => book.name.toLocaleLowerCase().indexOf(action.payload.trim()) >= 0
      );
      return { ...state, books: searchBooks.length ? [...searchBooks] : [] };
    }
    default:
      return state;
  }
}

export default reducer;
