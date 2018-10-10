import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import '../assets/main.scss';
import BookList from './containers/BookList';
import reducers from 'store/reducers';


const store = createStore(reducers);

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
