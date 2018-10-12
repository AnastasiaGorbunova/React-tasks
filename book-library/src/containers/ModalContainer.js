import React from 'react';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
//import TextField from '@material-ui/core/TextField';

import ModalWindow from "../components/ModalWindow";
import connect from "react-redux/es/connect/connect";

class ModalContainer extends React.Component {

    data = this.props.bookInfo;

    handleEscPress = (event) => {
        if (event.keyCode === 27) {
            this.handleCloseModal();
        }
    };

    componentDidMount() {
        document.addEventListener("keydown", this.handleEscPress);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleEscPress);
    }

    render() {
console.log(this.props)
        const {bookInfo} = this.props;
        return (
            this.props.initialValues ?
                <ModalWindow>
                    <p className='modal-icon-close' onClick={this.handleCloseModal}>×</p>
                    <div className='book-information-container' onKeyUp={this.close}>
                        <div className='book-cover'>
                            <img
                                src={bookInfo.cover}
                                alt="white fang"/>
                        </div>
                        <form >
                            <div className="book-info">
                                <Field name='name' className="modal-title" component='textarea' type='text' />
                                <Field name='author' className='book-author' component='textarea' type='text'/>
                                <Field name='description' className='book-description' component='textarea' type='text'/>
                            </div>
                        </form>
                    </div>

                </ModalWindow> : <Redirect to='/'/>
        );
    }

    handleCloseModal = () => {
        this.props.history.push('/');
    };
}

const mapStateToProps = ({bookReducer}, {match}) => {
    console.log(bookReducer.books.find(({id}) => id === match.params.id))
    return {
        bookInfo: bookReducer.books.find(({id}) => id === match.params.id),
        initialValues: bookReducer.books.find(({id}) => id === match.params.id)
    }
};

ModalContainer = reduxForm({
    form: 'testForm'
})(ModalContainer);

export default connect(mapStateToProps)(ModalContainer);