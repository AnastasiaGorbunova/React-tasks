import React from "react";
import {Context} from "./context";

class ColorProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'wheat'
        };
    }

    changeColor = () => {
        const r = Math.floor(Math.random() * (256));
        const g = Math.floor(Math.random() * (256));
        const b = Math.floor(Math.random() * (256));
        const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        return color;
    };

    render() {
        return (
            <Context.Provider value={{
                color: this.state.color,
                newColor: () => this.setState({
                    color: this.changeColor()
                })
            }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default ColorProvider;