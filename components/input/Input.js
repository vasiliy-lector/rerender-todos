import { Component, html } from 'rerender';

const
    TYPES_WITH_CHECKED = {
        checkbox: true,
        radio: true
    };

class Input extends Component {

    componentWillMount() {
        this.setStateByProps();
    }

    componentWillReceiveProps(nextProps) {
        this.setStateByProps(nextProps);
    }

    handleChange(event) {
        const { type } = this.props;

        if (TYPES_WITH_CHECKED[type]) {
            this.changed = true;

            let { checked } = event.target;

            this.setState({
                checked
            });
        }

        this.props.onChange && this.props.onChange(event);
    }

    reset() {
        const { type } = this.props;

        this.changed = false;

        if (TYPES_WITH_CHECKED[type]) {
            this.setState({
                checked: this.defaultChecked
            });
        } else {
            this.setState({
                value: this.defaultValue
            });
        }
    }

    handleInput(event) {
        this.changed = true;

        let { value } = event.target;

        this.setState({
            value
        });

        this.props.onInput && this.props.onInput(event);
    }

    setStateByProps(props = this.props) {
        let nextState = Object.assign({}, props),
            { value = '', checked = false, type } = props;

        if (TYPES_WITH_CHECKED[type]) {
            this.defaultChecked = checked;

            if (!this.changed) {
                nextState.checked = checked;
            }
        } else {
            this.defaultValue = value;

            if (!this.changed) {
                nextState.value = value;
            }
        }

        delete nextState.ref;

        this.setState(nextState);
    }

    render() {
        return html `<input _=${this.state}
            onInput=${this.handleInput}
            onChange=${this.handleChange}
        />`;
    }
}

Input.defaults = {
    type: 'text'
};

Input.autoBind = ['handleInput', 'handleChange'];

export default Input;
