import React from 'react';
import {Route, Link, BrowserRouter, Switch} from 'react-router-dom';
import {connect} from 'react-redux';

import * as BookActions from '../store/actions/BookActions';
import ModalContainer from "./ModalContainer";

class BookList extends React.Component {

    render() {
        const {books} = this.props;

        return (
            <React.Fragment>
                <ul className='book-container'> {
                    books.map(book =>
                        <Link to={`/books/${book.id}`} key={book.id}>
                            <li className='book-item'>
                                <span className='book-item-delete' onClick={this.onDeleteHandle(book.id)}>×</span>
                                <p>
                                    Author: {book.author}
                                </p>
                                <p>
                                    Year: {book.year}
                                </p>
                                <p>
                                    Pages: {book.pages}
                                </p>
                                <p>
                                    Description: {book.description}
                                </p>
                            </li>
                        </Link>
                    )
                } </ul>
                <Route path='/books/:id' component={ModalContainer}/>
            </React.Fragment>
        );
    }

    onDeleteHandle = id => () => this.props.deleteBook(id);
}

const mapStateToProps = (state, props) => {
    console.log(props);
    return {
        books: state.books
    }
};

const mapDispatchToProps = dispatch => ({
    deleteBook: id => {
        dispatch(BookActions.deleteBook(id))
    },
    selectBook: id => {
        dispatch(BookActions.selectBook(id))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
