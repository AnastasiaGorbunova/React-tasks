const e = React.createElement;

class myComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: ['constructor',
                'getDerivedStateFromProps',
                'render',
                'componentDidMount']
        };
        this.handleClick = this.handleClick.bind(this);
    }

    static getDerivedStateFromProps(prop, state) {
        return null;
    }

    render() {
        const listSteps = this.state.steps.map((step) =>
            <li key={step.toString()}>
                {step}
            </li>
        );

        return (
            <ul className='list'>{listSteps}</ul>
        );
    }

    handleClick() {
        const steps = this.state.steps;
        const item = 'componentDidUpdate';
        this.setState({steps: steps.concat(item)});
        console.log('kek');
    }

    componentDidMount() {
        const list = document.querySelector('.list');
        list.addEventListener('click', this.handleClick);
        console.log(this.state);
    }

    componentDidUpdate(prevProps, prevState) {
        // list.removeEventListener('click', this.g);
        console.log(this.state);
    }

    // componentDidUnmount(){
    //
    // }
}

const domContainer = document.querySelector('.app-container');
ReactDOM.render(e(myComponent), domContainer);

