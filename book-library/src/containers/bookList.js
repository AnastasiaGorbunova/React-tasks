import React from 'react';
import {connect} from 'react-redux';

class BookList extends React.Component {
    render() {
        const {books} = this.props;
        return (
            <ul className='book-container'> {
                books.map(book =>
                    <li key={book.id} className='book-item'>
                        <span>
                           Author: {book.author}
                        </span>
                        <span>
                           Year: {book.year}
                        </span>
                        <span>
                           Pages: {book.pages}
                        </span>
                        <button className='book-item-delete' onClick={this.onDeleteHandle(book.id)}>Delete book</button>
                    </li>
                )
            } </ul>
        );
    }

    onDeleteHandle = id => () => this.props.onDeleteBook(id);
}

const mapStateToProps = (state) => {
    console.log(state.books);
    return {books: state.books}
};

const mapDispatchToProps = (dispatch) => ({
    onDeleteBook: (id) => {
        dispatch({type: 'DELETE_BOOK', id})
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(BookList);