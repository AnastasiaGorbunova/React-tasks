import React from 'react';
import cx from 'classnames';

class TextField extends React.PureComponent {

    render() {
        console.log(this.props);
        const {input, meta} = this.props;
        const className = cx('text-field', this.props.className);

        return <input className={className} {...input}/>
    }
}

export default TextField;
