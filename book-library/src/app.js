import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import '../assets/main.scss';
import BookList from "./containers/BookList";
import reducers from 'store/reducers/index';
import {Route, Link, BrowserRouter} from 'react-router-dom';

const store = createStore(reducers);

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Provider store={store}>
                   <Route path='/' component={BookList} />
                </Provider>
            </BrowserRouter>
        );
    }
}

const domContainer = document.querySelector('.app-container');
ReactDOM.render(<App/>, domContainer);

