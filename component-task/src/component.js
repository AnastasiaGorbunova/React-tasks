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
        const steps = this.state.steps;

        return (
            <ul className='list' onClick={this.handleClick}>{
                steps.map((step,index) =>
                    <li key={index}>
                        {step}
                    </li>
                )
            }</ul>
        );
    }

    handleClick() {
        const steps = this.state.steps;
        const item = 'componentDidUpdate';
        this.setState({steps: steps.concat(item)});
        console.log('kek');
    }

    componentDidMount() {
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

