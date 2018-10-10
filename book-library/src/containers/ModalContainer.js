import React from 'react';

import ModalWindow from "../components/ModalWindow";
import connect from "react-redux/es/connect/connect";

class ModalContainer extends React.Component {

    render() {
        return (
            <ModalWindow onClose={this.handleCloseModalWindow}>
                <div className='book-cover'>
                    <img
                        src="https://img1.od-cdn.com/ImageType-400/2389-1/FFC/136/CB/%7BFFC136CB-8ADB-40EC-8FA0-204216DEBFF8%7DImg400.jpg"
                        alt="white fang"/>
                </div>
                <div className="book-info">
                    <h2 className="modal-title">White Fang</h2>
                    <p className='book-author'> by Jack London </p>
                    <p className='book-description'>

                        Jack London's White Fang is the story of a wolf-dog's journey
                        from wildness into becoming civilized by humanity. Set in Canada's Yukon,
                        a lot of the novel is told from an animal point of view, exploring how animals might see us,
                        and see the world around them. White Fang's mirror novel is The Call of the Wild, London's
                        best-known work,
                        in which a civilized dog slowly becomes a wild animal.
                    </p>
                </div>
            </ModalWindow>
        );
    }

    handleCloseModalWindow = () => {
        console.log('lol');
    }
}

const mapStateToProps = (state, props) => {
    return {
        id: props.match.params.id
    }
};

export default connect(mapStateToProps)(ModalContainer);
