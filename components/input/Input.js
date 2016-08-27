import { Component, html } from 'rerender';

const
    PROPS_TO_OMIT = {
        checked: true,
        forceUpdate: true,
        value: true
    };

class Input extends Component {

    componentWillMount() {
        this.setStateByProps();
    }

    componentWillReceiveProps(nextProps) {
        this.setStateByProps(nextProps);
    }

    handleChange(event) {
        this.changed = true;

        let { checked } = event.target;

        this.setState({
            checked
        });

        this.props.handleChange && this.props.handleChange(event);
    }

    handleInput(event) {
        this.changed = true;

        let { value } = event.target;

        this.setState({
            value
        });

        this.props.handleInput && this.props.handleInput(event);
    }

    setStateByProps(props = this.props) {
        let nextState = Object.keys(props).reduce((memo, key) => {
                if (!PROPS_TO_OMIT[key]) {
                    memo[key] = props[key];
                }

                return memo;
            }, {}),
            { value, forceUpdate, checked } = props;

        this.defaultValue = value;

        if (!this.changed || forceUpdate) {
            if (typeof value !== 'undefined') {
                nextState.value = value;
            }

            if (typeof checked !== 'undefined') {
                nextState.checked = checked;
            }
        }

        this.setState(nextState);
    }

    render() {
        return html `<input _=${this.state}
            onInput=${this.handleInput}
            onChange=${this.handleChange}
        />`;
    }
}

Input.autoBind = ['handleInput', 'handleChange'];

export default Input;
