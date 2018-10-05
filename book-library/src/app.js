import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import '../assets/main.scss';
import BookList from "./containers/bookList";
import BookReducer from 'store/reducers/BookReducer';

const store = createStore(BookReducer);
class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <BookList/>
            </Provider>
        );
    }
}

const domContainer = document.querySelector('.app-container');
ReactDOM.render(<App/>, domContainer);