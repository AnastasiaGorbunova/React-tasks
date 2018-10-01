import React from 'react';
import ReactDOM from 'react-dom';
import ColorProvider from './color-provider';
import Button from './button';

class App extends React.Component {
    render() {
        return (
            <ColorProvider>
                <Button/>
            </ColorProvider>
        );
    }
}

const domContainer = document.querySelector('.app-container');
ReactDOM.render(<App/>, domContainer);
