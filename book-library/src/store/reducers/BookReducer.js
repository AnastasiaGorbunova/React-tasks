import * as types from '../../constants/ActionTypes';

const initialState = {
    books: [],
    currentBook: null
};

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter(({id}) => id !== action.id)
            };
        case types.FETCH_BOOKS.SUCCESS:
            return {
                ...state,
                books: action.books
            };
        case types.CHANGE_BOOK_LIST:
            return {
                ...state,
                books: action.books
            }
        default:
            return state;
    }
};
