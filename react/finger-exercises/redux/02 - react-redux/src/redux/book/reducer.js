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
      const addItem = state.bookSelected.find(book => book.id === action.payload);
      addItem.quantity += 1;
      return { ...state, bookSelected: [...state.bookSelected] };
    }
    case actions.REMOVE_ITEM: {
      const newBooksSelected = state.bookSelected.filter(book => book.id !== action.payload);
      return { ...state, bookSelected: [...newBooksSelected] };
    }
    case actions.SUBTRACT_ITEM: {
      const substractItem = state.bookSelected.find(book => book.id === action.payload);
      substractItem.quantity -= 1;
      return { ...state, bookSelected: [...state.bookSelected] };
    }
    case actions.SEARCH_ITEM: {
      const books = [...state.originalData];
      const searchBooks = books.filter(
        book => book.name.toLocaleLowerCase().indexOf(action.payload.trim()) >= 0
      );
      return { ...state, books: searchBooks.length ? [...searchBooks] : [...state.originalData] };
    }
    default:
      return state;
  }
}

export default reducer;
