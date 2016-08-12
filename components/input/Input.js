import { Component, html } from 'jsunit';

class Input extends Component {
    render() {
        var {
            placeholder,
            value,
            onClick,
            onChange
        } = this.props || {};

        return html `<input placeholder=${placeholder} value=${value} />`;
    }
}

export default Input;
