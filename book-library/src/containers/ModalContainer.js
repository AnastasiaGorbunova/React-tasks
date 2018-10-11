import React from 'react';
import {Redirect} from 'react-router-dom';

import ModalWindow from "../components/ModalWindow";
import connect from "react-redux/es/connect/connect";

class ModalContainer extends React.Component {

    handleEscPress = (event) => {
        if(event.keyCode === 27) {
            this.handleCloseModal();
        }
    };

    componentDidMount(){
        document.addEventListener("keydown", this.handleEscPress);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.handleEscPress);
    }

    render() {
        const {bookInfo, id} = this.props;

        return (
            this.props.bookInfo ?
            <ModalWindow>
                <p className='modal-icon-close' onClick={this.handleCloseModal} >×</p>
                <div className='book-information-container' onKeyUp={this.close}>
                    <div className='book-cover'>
                        <img
                            src={bookInfo.cover}
                            alt="white fang"/>
                    </div>
                    <div className="book-info">
                        <h2 className="modal-title">{bookInfo.name}</h2>
                        <p className='book-author'> by {bookInfo.author} </p>
                        <p className='book-description'>
                            {bookInfo.description}
                        </p>
                    </div>
                </div>
            </ModalWindow> : <Redirect to='/' />
        );
    }

    handleCloseModal = () => {
        this.props.history.push('/');
    };
}

const mapStateToProps = ({books}, {match}) => {
    return {
        id: match.params.id,
        bookInfo: books.find( ({id}) => id  === match.params.id)
    }
};

export default connect(mapStateToProps)(ModalContainer);
