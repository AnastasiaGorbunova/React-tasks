import * as types from '../../constants/ActionTypes';

export function deleteBook(id) {
    return {
        type: types.DELETE_BOOK,
        id
    };
}

export function selectBook(id) {
    return {
        type: types.SELECT_BOOK,
        id
    };
}