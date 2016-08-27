import { Component, html } from 'rerender';

const
    PROPS_TO_OMIT = {
        forceUpdate: true,
        value: true
    };

class InputText extends Component {

    componentWillMount() {
        this.setStateByProps();
    }

    componentWillReceiveProps(nextProps) {
        this.setStateByProps(nextProps);
    }

    handleInput(event) {
        this.changed = true;

        let { value } = event.target;

        this.setState({
            value
        });

        this.props.handleInput && this.props.handleInput(event, value);
    }

    setStateByProps(props = this.props) {
        let nextState = Object.keys(props).reduce((memo, key) => {
                if (!PROPS_TO_OMIT[key]) {
                    memo[key] = props[key];
                }

                return memo;
            }, {}),
            { value, forceUpdate } = props;

        this.defaultValue = value;

        if (!this.changed || forceUpdate) {
            nextState.value = value;
        }

        this.setState(nextState);
    }

    render() {
        return html `<input _=${this.state}
            onInput=${this.handleInput}
        />`;
    }
}

InputText.autoBind = ['handleInput'];

export default InputText;
