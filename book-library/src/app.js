import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {reducer as formReducer} from 'redux-form';
import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import '../assets/main.scss';
import BookList from './containers/BookList';
import {bookReducer} from 'store/reducers/BookReducer';
import {watchInputChange} from 'sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    bookReducer,
    form: formReducer
});

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}

const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(sagaMiddleware)
);

//sagaMiddleware.run(watchInputChange);

class App extends React.Component {

    render() {
        console.log(store.getState());
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <Route path='/' component={BookList}/>
                </Provider>
            </BrowserRouter>
        );
    }
}

const domContainer = document.querySelector('.app-container');
ReactDOM.render(<App/>, domContainer);
