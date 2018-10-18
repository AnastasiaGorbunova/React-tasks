import React from 'react';
import ReactDOM from 'react-dom';
import connect from "react-redux/es/connect/connect";


class AddBookButton extends React.Component {

    render() {
        return <button className='add-book-button'> Add book </button>
    }
}

export default AddBookButton;