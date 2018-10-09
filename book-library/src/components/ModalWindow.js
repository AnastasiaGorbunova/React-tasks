import React from 'react';
import ReactDOM from 'react-dom';

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
            <div className="modal-wrapper">
                <aside className="modal" >
                    <p className='modal-icon-close'>×</p>
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
