import React from 'react';
import ReactDOM from 'react-dom';
import connect from "react-redux/es/connect/connect";
import {Link} from "react-router-dom";

const modalRoot = document.querySelector('.modal-root');

class ModalWindow extends React.Component {

    el = document.createElement('div');

    componentDidMount() {
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        modalRoot.removeChild(this.el);
    }

    render() {

        return ReactDOM.createPortal(
            <div className="modal-wrapper" onClick={this.props.onClose}>
                <aside className="modal" >
                    <Link to='/'>
                        <p className='modal-icon-close'>×</p>
                    </Link>
                    <div className='book-information-container'>
                        {this.props.children}
                    </div>
                </aside>
            </div>,
            this.el
        )
    }
}

export default ModalWindow;
