import { Component, isSameProps } from 'rerender';

class Textarea extends Component {
    componentWillMount() {
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

        this.props.onInput && this.props.onInput(event);
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

        if (!isSameProps(textAreaProps, this.props.textAreaProps)) {
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

    render({ jsx }) {
        const { textAreaProps, value } = this.state;

        return jsx `<textarea ${textAreaProps} onInput=${this.handleInput}>${value}</textarea>`;
    }
}

Textarea.autoBind = ['handleInput'];

export default Textarea;
