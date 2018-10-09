import React from 'react';
import {connect} from 'react-redux';
import * as BookActions from '../store/actions/BookActions';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import ModalWindow from "../components/ModalWindow";

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

                {showModal ? (
                    <ModalWindow onClose={this.handleCloseModalClick}>
                        <div className='book-cover'>
                            <img src="https://img1.od-cdn.com/ImageType-400/2389-1/FFC/136/CB/%7BFFC136CB-8ADB-40EC-8FA0-204216DEBFF8%7DImg400.jpg" alt="white fang"/>
                        </div>

                        <div className="book-info">
                            <h2 className="modal-title">White Fang</h2>
                            <p className='book-description'>
                                Jack London's White Fang is the story of a wolf-dog's journey
                                from wildness into becoming civilized by humanity. Set in Canada's Yukon,
                                a lot of the novel is told from an animal point of view, exploring how animals might see us,
                                and see the world around them. White Fang's mirror novel is The Call of the Wild, London's best-known work,
                                in which a civilized dog slowly becomes a wild animal.
                            </p>
                        </div>

                    </ModalWindow>
                ) : null}

            </React.Fragment>
        );
    }

    handleShowModalClick = () => this.setState({showModal: true});

    handleCloseModalClick = () => this.setState({showModal: false});

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
