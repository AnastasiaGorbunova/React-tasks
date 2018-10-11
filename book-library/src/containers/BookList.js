import React from 'react';
import {Route, Link} from 'react-router-dom';
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
                                <div>
                                    <img className='book-item-cover' src={book.cover}/>
                                </div>
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

const mapStateToProps = ({books}) => {
    return {
        books: books
    }
};

const mapDispatchToProps = dispatch => ({
    deleteBook: id => {
        dispatch(BookActions.deleteBook(id))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
