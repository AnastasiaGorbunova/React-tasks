import React from 'react';
import ReactDOM from 'react-dom';
import connect from "react-redux/es/connect/connect";


class SortBooksButton extends React.Component {

    render() {
        return <button className='add-book-button'> Sort books </button>
    }
}

export default SortBooksButton;