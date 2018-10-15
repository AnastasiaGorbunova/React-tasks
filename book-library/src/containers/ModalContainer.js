import React from 'react';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm, Form} from 'redux-form';
import connect from 'react-redux/es/connect/connect';

import ModalWindow from '../components/ModalWindow';
import TextField from '../components/TextField';

class ModalContainer extends React.Component {

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

    componentWillUpdate() {
        console.log('updated')
    }

    render() {
        const {bookInfo} = this.props;
        console.log('rendered');
        return (
            this.props.initialValues ?
                <ModalWindow>
                    <p className='modal-icon-close' onClick={this.handleCloseModal}>×</p>
                    <div className='book-information-container' onKeyUp={this.close}>
                        <div className='book-cover'>
                            <img src={bookInfo.cover} alt="white fang"/>
                        </div>

                        <Form>
                            <div className="book-info">
                                <Field name='name' className="modal-title" component={TextField} type='text'/>
                                <Field name='author' className='book-author' component={TextField} type='text'/>
                                <Field name='description' className='book-description' component='textarea' type='text'/>
                            </div>
                        </Form>
                    </div>
                </ModalWindow> : <Redirect to='/'/>
        );
    }

    handleCloseModal = () => {
        this.props.history.push('/');
    };
}

const mapStateToProps = ({bookReducer}, {match}) => {
    const book = bookReducer.books.find(({id}) => id === match.params.id);
    return {
        bookInfo: book,
        initialValues: book
    }
};

ModalContainer = reduxForm({
    form: 'testForm'
})(ModalContainer);

export default connect(mapStateToProps)(ModalContainer);