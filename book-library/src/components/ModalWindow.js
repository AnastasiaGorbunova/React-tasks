import React from 'react';

class ModalWindow extends React.Component {

    render() {

        return (
            <div className="modal-wrapper">
                <aside className="modal">
                    <span className='modal-icon-close'>×</span>
                    <header>
                        <h2 className="modal-title">Book title will be here</h2>
                    </header>
                    <div className='book-information-container'>
                        <span>
                           Author: Lol Kek
                        </span>
                        <span>
                           Year: 2007
                        </span>
                        <span>
                           Pages: 10
                        </span>
                        <span>
                           Description: There are three types of sentence structures: simple, compound and complex.
                        </span>
                    </div>
                </aside>
                </div>
        )
    }
}

export default ModalWindow;
