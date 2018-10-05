const initialState = {
    books: [
        {
            id: 1,
            author: 'Jack London',
            year: 1990,
            pages: 234
        },
        {
            id: 2,
            author: 'Lilo Stich',
            year: 1978,
            pages: 99
        },
        {
            id: 3,
            author: 'Kod Sich',
            year: 1978,
            pages: 99
        }
    ]
};

export default function BookReducer(state = initialState, action) {
    switch (action.type) {
        case 'DELETE_BOOK':
            console.log(action.id);
            console.log(state.books);
            return {
                ...state,
                books: state.books.filter(({ id }) => id !== action.id)
            };
        default:
            return state
    }
}
