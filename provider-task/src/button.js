import React from "react";
import {Context} from "./context";

class Button extends React.Component {
    render() {
        return (
            <Context.Consumer>
                {(context) => (
                    <button className="poop" onClick={context.newColor} style={{background: context.color}}>💩</button>
                )}
            </Context.Consumer>
        );
    }
}

export default Button;