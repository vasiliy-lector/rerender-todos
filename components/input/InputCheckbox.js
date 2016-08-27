import { Component, html } from 'rerender';

const
    PROPS_TO_OMIT = {
        forceUpdate: true,
        checked: true
    };

class InputCheckbox extends Component {

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

        this.props.handleChange && this.props.handleChange(event, checked);
    }

    setStateByProps(props = this.props) {
        let nextState = Object.keys(props).reduce((memo, key) => {
                if (!PROPS_TO_OMIT[key]) {
                    memo[key] = props[key];
                }

                return memo;
            }, {}),
            { checked, forceUpdate } = props;

        if (!this.changed || forceUpdate) {
            nextState.checked = checked;
        }

        this.setState(nextState);
    }

    render() {
        return html `<input _=${this.state}
            onChange=${this.handleChange}
        />`;
    }
}

InputCheckbox.autoBind = ['handleChange'];

export default InputCheckbox;
