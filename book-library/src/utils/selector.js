import {createSelector} from 'reselect';
import cloneDeep from 'lodash/cloneDeep';

const bookSelector = state => state.bookReducer.books;
const getSorts = state => state.bookReducer.sortings;

export const getBooks = createSelector(
    [bookSelector, getSorts],

    (books, sortsList) => {
        const clonedBooks = cloneDeep(books);
        Object.entries(sortsList).map(([sortName, isEnabled]) => {
            isEnabled && clonedBooks.sort((a, b) => (a[sortName] < b[sortName]) - (a[sortName] > b[sortName]))
        });

        return clonedBooks;
    }
);
