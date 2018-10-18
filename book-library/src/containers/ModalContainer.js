import React from 'react';
import {Redirect} from 'react-router-dom';
import {Field, reduxForm, Form} from 'redux-form';
import connect from 'react-redux/es/connect/connect';

import ModalWindow from '../components/ModalWindow';
import TextField from '../components/TextField';
import {required} from 'utils/formValidators';
import {changeInput} from 'store/actions/BookActions';

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
        console.log(this.props)
        const {bookInfo} = this.props;
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
                                <Field name='name' onBlur={this.onChangeHandle} validate={required}
                                       className="modal-title" component={TextField} type='text'/>
                                <Field name='author' onBlur={this.onChangeHandle} validate={required}
                                       className='book-author' component={TextField} type='text'/>
                                <Field name='description' onBlur={this.onChangeHandle} validate={required}
                                       className='book-description' component='textarea'
                                       type='text'/>
                            </div>
                        </Form>
                    </div>
                </ModalWindow> : <Redirect to='/'/>
        );
    }

    handleCloseModal = () => {
        this.props.history.push('/');
    };


    onChangeHandle = () =>  this.props.changeInput(this.props.bookInfo.id);

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

export default connect(mapStateToProps, {
    changeInput
})(ModalContainer);