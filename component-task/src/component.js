const e = React.createElement;

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: ['constructor',
                'getDerivedStateFromProps',
                'render',
                'componentDidMount']
        };
        this.handleClickUpdate = this.handleClickUpdate.bind(this);
    }

    static getDerivedStateFromProps(prop, state) {
        return null;
    }

    render() {
        const steps = this.state.steps;
        return (
            <ul className='list' onClick={this.handleClick}>{
                steps.map((step, index) =>
                    <li key={index}>
                        {step}
                    </li>
                )
            }</ul>
        );
    }

    handleClickUpdate() {
        const steps = this.state.steps;
        const item = 'componentDidUpdate';
        this.setState({steps: steps.concat(item)});
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('did update');
    }

    componentDidMount() {
        console.log('mounted');
    }

    componentWillUnmount() {
        console.log('unmounted');
    }
}

class ListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            unmount: false
        };
        this.child = React.createRef();
        this.handleClickUnmount = this.handleClickUnmount.bind(this);
    }

    handleClickUpdate = () => {
        this.child.current.handleClickUpdate();
    };

    handleClickUnmount() {
        if (!this.state.unmount) {
            this.setState({
                unmount: true
            });
        }
        else {
            this.setState({
                unmount: false
            });
        }
    }

    render() {
        return [
            (!this.state.unmount) ?
                <div key = {1} className="list-container">
                    <button onClick={this.handleClickUpdate}>Update</button>
                    <button onClick={this.handleClickUnmount}>Unmount</button>
                    <List ref={this.child}/>
                </div> :
                <button key = {2} onClick={this.handleClickUnmount}>Mount</button>
        ];

        // return arr.map((elem, index) => {
        //         let b = document.querySelector(elem.type).firstChild;
        //         console.log(b);
        //         console.log(elem);
        //         return arr;
        //     }
        // );
    }
}

const domContainer = document.querySelector('.app-container');
ReactDOM.render(e(ListContainer), domContainer);
