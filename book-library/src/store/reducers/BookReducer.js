import * as types from '../../constants/ActionTypes';

const initialState = {
    books: [
        {
            id: 1,
            author: 'Jack London',
            year: 1990,
            pages: 234,
            description: 'lalya topolya',
            open: false
        },
        {
            id: 2,
            author: 'Lilo Stich',
            year: 1978,
            pages: 99,
            description: '',
            open: false
        },
        {
            id: 3,
            author: 'Kod Sich',
            year: 1978,
            pages: 99,
            description: '',
            open: false
        }
    ]
};

export default function BookReducer(state = initialState, action) {
    switch (action.type) {
        case types.DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter(({ id }) => id !== action.id)
            };
        case types.SELECT_BOOK:
            return {
                ...state,
                open : !state.books.open
            };
        default:
            return state;
    }
}
