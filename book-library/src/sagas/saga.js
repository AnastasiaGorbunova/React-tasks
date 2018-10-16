import {takeEvery, put, select, fork, call} from 'redux-saga/effects';
import {getFormValues, isValid} from 'redux-form';

import {fetchBooksTypes, changeBookList} from 'store/actions/BookActions';
import BookStore from 'store/BookStore';

function* fetchBooks() {
    const booksList = yield call(::BookStore.getBooksList);
    yield put(fetchBooksTypes.success(booksList));
}

function* changeInput() {
    const formValues = yield select(getFormValues('testForm'));
    const isInputValid = yield select(isValid('testForm'));
    if (isInputValid) {
        BookStore.setCurrentBook(formValues, formValues.id);
       // yield put(changeBookList(formValues))
    }
}

export default function* () {
    yield fork(fetchBooks);
    yield takeEvery('INPUT_CHANGE', changeInput);
}
