import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/main.scss';

class App extends React.Component {
    render() {
        return (
          <div>Lalka</div>
        );
    }
}

const domContainer = document.querySelector('.app-container');
ReactDOM.render(<App/>, domContainer);