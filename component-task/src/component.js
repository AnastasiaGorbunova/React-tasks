const e = React.createElement;

class myComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const steps = ['constructor', 'getDerivedStateFromProps', 'render', 'componentDidMount'];
        const listSteps = steps.map((step) =>
            <li key={step.toString()}>
                {step}
            </li>
        );


        return (
            <ul>{listSteps}</ul>
        );
    }
}

const domContainer = document.querySelector('.app-container');
ReactDOM.render(e(myComponent), domContainer);

