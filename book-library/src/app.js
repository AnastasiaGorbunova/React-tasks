import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/main.scss';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import {createStore} from 'redux';

const initialState = [
    {
        author: 'Jack London',
        year: 1990,
        str: 234
    },
    {
        author: 'Lilo Stich',
        year: 1978,
        str: 99
    }
];

function AuthorsReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TRACK':
            return state.concat([action.payload]);
        default:
            return state
    }
}

const store = createStore(AuthorsReducer);
class App extends React.Component {

    render() {
        const d = store.getState();
        return (
            <Provider store={store}>
                <ul className='list'> {
                    d.map((step, index) =>
                        <li key={index}>
                            {step.author}
                        </li>
                    )
                } </ul>
            </Provider>
        );
    }
}





const domContainer = document.querySelector('.app-container');
ReactDOM.render(<App/>, domContainer);