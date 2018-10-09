import React from 'react';
import {connect} from 'react-redux';
import * as BookActions from '../store/actions/BookActions';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import ModalWindow from "../components/ModalWindow";
import ModalContainer from "./ModalContainer";

class BookList extends React.Component {
    state = {showModal: false};

    render() {
        const {books} = this.props;
        const {showModal} = this.state;

        return (
            <React.Fragment>
                <ul className='book-container'> {
                    books.map(book =>
                        <li key={book.id} className='book-item' onClick={this.handleShowModalClick}>
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
                    )
                } </ul>

            </React.Fragment>
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
