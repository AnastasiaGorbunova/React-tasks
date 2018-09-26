class Square extends React.Component {
    render() {
        return (
            <div className="square">
                lol
            </div>
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
            steps: [
                'constructor',
                'getDerivedStateFromProps',
                'render',
                'componentDidMount'
            ],
            mountButtonText: 'Unmount'
        };
    }

    handleClickUpdate = () => {
        this.setState(({updates, steps}) => ({
            updates: updates + 1,
            steps: steps.concat('componentDidUpdate')
        }));
    };

    handleClickUnmount = () => {
        const {unmount, mountButtonText} = this.state;
        let mountMessege = !unmount ? 'componentDidUnmount' : 'componentDidMount';

        this.setState(({unmount, updates, steps}) => ({
            unmount: !unmount,
            steps: steps.concat(mountMessege),
            mountButtonText: !unmount ? 'Mount' : 'Unmount'
        }));
    };

    render() {
        const {unmount, steps, mountButtonText} = this.state;
        let container = <div>
            <button onClick={this.handleClickUpdate}>Update</button>
            <button onClick={this.handleClickUnmount}>{mountButtonText}</button>
            <ul className='list'> {
                steps.map((step, index) =>
                    <li key={index}>
                        {step}
                    </li>
                )
            } </ul>
        </div>;

        return (
            !unmount ?
                (<div className="list-container">
                    <div> {container}</div>
                    <Square/>
                    </div>) :
                (<div className="list-container"> {container} </div>)
        )
    }
}

const domContainer = document.querySelector('.app-container');
ReactDOM.render(<Container/>, domContainer);
