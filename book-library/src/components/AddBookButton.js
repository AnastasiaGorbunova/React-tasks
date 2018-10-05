import React from 'react';

class AddBookButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.toggleActive}>Add book</button>
        );
    }
}

export default AddBookButton;