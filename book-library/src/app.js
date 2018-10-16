import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {reducer as formReducer} from 'redux-form';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import '../assets/main.scss';
import BookList from './containers/BookList';
import {bookReducer} from 'store/reducers/BookReducer';
import mainSagas from 'sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    bookReducer,
    form: formReducer
});

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mainSagas);

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
