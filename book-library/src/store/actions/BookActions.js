import * as types from '../../constants/ActionTypes';

export function deleteBook(id) {
    return {
        type: types.DELETE_BOOK,
        id
    };
}
