import { Component, html } from 'rerender';

class Input extends Component {
    render() {
        return html `<input _=${this.props} />`;
    }
}

export default Input;
