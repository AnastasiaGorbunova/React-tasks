const Context = React.createContext();

class ColorProvider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'wheat'
        };
    }

    changeColor = () => {
        const r=Math.floor(Math.random() * (256));
        const g=Math.floor(Math.random() * (256));
        const b=Math.floor(Math.random() * (256));
        const color='#' + r.toString(16) + g.toString(16) + b.toString(16);
        return color;
    };

    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                newColor: () => this.setState({
                    age : this.state.age + 1,
                    color: this.changeColor()
                })
            }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

class Button extends React.Component {
    
    render() {
        return (
            <Context.Consumer>
                {(context) => (
                    <button className="poop" onClick={context.newColor} style={{background: context.state.color}}>💩</button>
                )}
            </Context.Consumer>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <ColorProvider>
                    <Button/>
                </ColorProvider>
            </div>
        );
    }
}



const domContainer = document.querySelector('.app-container');
ReactDOM.render(<App/>, domContainer);
