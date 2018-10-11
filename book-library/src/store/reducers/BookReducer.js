import * as types from '../../constants/ActionTypes';

const initialState = {
    books: [
        {
            id: '1',
            author: 'Jack London',
            name: 'White Fang',
            year: 1906,
            pages:	288,
            description: 'Jack London\'s White Fang is the story of a wolf-dog\'s journey\n' +
                '                            from wildness into becoming civilized by humanity. Set in Canada\'s Yukon,\n' +
                '                            a lot of the novel is told from an animal point of view, exploring how animals might see us,\n' +
                '                            and see the world around them. White Fang\'s mirror novel is The Call of the Wild, London\'s\n' +
                '                            best-known work,\n' +
                '                            in which a civilized dog slowly becomes a wild animal.',
            cover: 'https://img1.od-cdn.com/ImageType-400/2389-1/FFC/136/CB/%7BFFC136CB-8ADB-40EC-8FA0-204216DEBFF8%7DImg400.jpg'
        },
        {
            id: '2',
            author: 'Joanne Rowling',
            name: 'Harry Potter and the Philosopher\'s Stone',
            year: 1997,
            pages: 432,
            description: 'Harry Potter has no idea how famous he is. That\'s because he\'s being raised by his miserable aunt and uncle who are terrified Harry will learn that he\'s really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.',
            cover: 'https://s2982.pcdn.co/wp-content/uploads/2014/08/HP_hc_new_1.jpeg'
        },
        {
            id: '3',
            author: 'Markus Zusak',
            name: 'The Book Thief',
            year: 2005,
            pages: 560,
            description: 'fjfjfjfjfjfj',
            cover: 'https://images-na.ssl-images-amazon.com/images/I/91ndEtx1uWL.jpg'
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
                books: state.books.filter(({ id }) => id === action.id)
            };
        default:
            return state;
    }
}
