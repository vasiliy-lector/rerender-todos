import { Component, shallowEqual, jsx } from 'rerender';

class Textarea extends Component {
    init() {
        this.setStateByProps();
    }

    componentWillReceiveProps(nextProps) {
        this.setStateByProps(nextProps);
    }

    handleInput(event) {
        this.changed = true;

        const { value } = event.target;

        this.setState({
            value
        });

        this.props.oninput && this.props.oninput(event);
    }

    reset() {
        this.changed = false;
        this.setState({
            value: this.defaultValue
        });
    }

    setStateByProps(props = this.props) {
        const { value = '' } = props,
            textAreaProps = Object.keys(props).reduce((memo, key) => {
                if (key !== 'value') {
                    memo[key] = props[key];
                }

                return memo;
            }, {});

        if (!shallowEqual(textAreaProps, this.props.textAreaProps)) {
            this.setState({
                textAreaProps
            });
        }

        this.defaultValue = value;

        if (!this.changed) {
            this.setState({
                value
            });
        }
    }

    render() {
        const { textAreaProps, value } = this.state;

        return jsx `<textarea ${textAreaProps} oninput=${this.handleInput}>${value}</textarea>`;
    }
}

Textarea.antibind = ['handleInput'];

export default Textarea;
