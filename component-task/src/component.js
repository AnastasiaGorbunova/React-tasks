class StepsList extends React.Component {
    render() {
        const {steps} = this.props;
        return (
            <ul className='list'> {
                steps.map((step, index) =>
                    <li key={index}>
                        {step}
                    </li>
                )
            } </ul>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('updated');
    }

    componentDidMount() {
        console.log('mounted');
    }

    componentWillUnmount() {
        console.log('unmounted');
    }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unmount: false,
            updated: null
        };
    }

    steps = [
        'constructor',
        'getDerivedStateFromProps',
        'render',
        'componentDidMount'
    ];

    handleClickUpdate = () => {
        const {updated} = this.state;
        this.steps  = this.steps.concat('componentDidUpdate');
        this.setState({updated: updated + 1});
    };

    handleClickUnmount = () => {
        const {unmount} = this.state;
        this.setState(prevState => ({unmount: !unmount}));
    };

    render() {
        const {unmount} = this.state;
        return (
            !unmount ?
                (<div className="list-container">
                    <button onClick={this.handleClickUpdate}>Update</button>
                    <button onClick={this.handleClickUnmount}>Unmount</button>
                    <List steps = {this.steps} />
                </div>) :
                (<button onClick={this.handleClickUnmount}>Mount</button>)
        );
    }
}

const domContainer = document.querySelector('.app-container');
ReactDOM.render(<Container/>, domContainer);
