import * as types from '../../constants/ActionTypes';

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
