import React from 'react';
import {connect} from 'react-redux';
import * as BookActions from '../store/actions/BookActions';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import ModalWindow from "../components/ModalWindow";


class BookList extends React.Component {
    render() {
        const {books} = this.props;
        return (
            <div>
                <ModalWindow/>
                <ul className='book-container'> {
                    books.map(book =>
                        <Link to={`/${book.author}`} key={book.id}>
                            <li className='book-item' onClick={this.handleClick}>
                                <span className='book-item-delete' onClick={this.onDeleteHandle(book.id)}>×</span>
                                <span>
                           Author: {book.author}
                        </span>
                                <span>
                           Year: {book.year}
                        </span>
                                <span>
                           Pages: {book.pages}
                        </span>
                                <span>
                           Description: {book.description}
                        </span>
                            </li>
                        </Link>
                    )
                } </ul>
            </div>
        );
    }

    onDeleteHandle = id => () => this.props.deleteBook(id);
}

const mapStateToProps = state => {
    return {books: state.books}
};

const mapDispatchToProps = dispatch => ({
    deleteBook: id => {
        dispatch(BookActions.deleteBook(id))
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
