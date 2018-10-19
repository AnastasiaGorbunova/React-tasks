import * as types from 'constants/ActionTypes';
import BookStore from 'store/BookStore';
import books from 'etc/dummy-data/books';

const initialState = {
    books: [],
    sortings: {
        pages: true,
        year: true
    }
};

export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DELETE_BOOK:
            const bookList = state.books.filter(({id}) => id !== action.id);
            BookStore.setBooks(bookList);
            return {
                ...state,
                books: bookList
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
            };
        case types.SORT_BOOKS:
            return {
                ...state,
                sortings: {
                    pages: !initialState.sortings.pages,
                    year: !initialState.sortings.year
                }
            }
        default:
            return state;
    }
};
