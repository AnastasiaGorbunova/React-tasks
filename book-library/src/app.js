import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {combineReducers} from 'redux';

import '../assets/main.scss';
import BookList from './containers/BookList';
import {bookReducer} from 'store/reducers/BookReducer';

const rootReducer = combineReducers({
    bookReducer,
    form: formReducer
});

const store = createStore(rootReducer);

class App extends React.Component {

    render() {
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
