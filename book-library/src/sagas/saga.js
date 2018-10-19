import {takeEvery, put, select, fork, call} from 'redux-saga/effects';
import {getFormValues, isValid} from 'redux-form';

import {fetchBooksTypes, changeBookList} from 'store/actions/BookActions';
import BookStore from 'store/BookStore';

function* fetchBooks() {
    const booksList = yield call(::BookStore.getBooksList);
    yield put(fetchBooksTypes.success(booksList));
}

// function* deleteBook() {
//     const booksList = yield call(::BookStore.getBooksList);
//     const bookList = state.books.filter(({id}) => id !== action.id);
//     BookStore.setBooks(bookList);
// }

function* changeInput() {
    const formValues = yield select(getFormValues('testForm'));
    const isInputValid = yield select(isValid('testForm'));

    if (isInputValid) {
        BookStore.setCurrentBook(formValues, formValues.id);
        const booksList = yield call(::BookStore.getBooksList);
        yield put(changeBookList(booksList));
    } else {
        console.log('error');
    }
}

export default function* () {
    yield fork(fetchBooks);
   // yield fork(deleteBook);
    yield takeEvery('INPUT_CHANGE', changeInput);
}
