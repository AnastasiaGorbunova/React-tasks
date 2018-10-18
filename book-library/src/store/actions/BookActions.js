import * as types from 'constants/ActionTypes';

export function deleteBook(id) {
    return {
        type: types.DELETE_BOOK,
        id
    };
}

export function changeInput(value) {
    return {
        type: types.INPUT_CHANGE,
        value
    };
}

export const fetchBooksTypes = {
    request: () => ({
        type: types.FETCH_BOOKS.REQUEST
    }),
    success: (books) => ({
        type: types.FETCH_BOOKS.SUCCESS,
        books
    }),
    failure: (error) => ({
        type: types.FETCH_BOOKS.FAILURE,
        error
    })
};

export function changeBookList(books) {
    return {
        type: types.CHANGE_BOOK_LIST,
        books
    }
}

export function sortBooks(books) {
    return {
        type : types.SORT_BOOKS,
        books
    }
}