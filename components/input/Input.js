import { Component, debug, html } from 'rerender';

class Input extends Component {
    handleRef(name, ref) {
        debug.log('Input get ref', name, ref);
    }

    handleFocus() {
        this.focused = true;
    }

    handleBlur() {
        this.focused = false;
        this.lastSelectionStart = undefined;
        this.lastSelectionEnd = undefined;
        this.lastSelectionDirection = undefined;
    }

    handleChange(event) {
        this.lastChecked = event.target.checked;
    }

    handleInput(event) {
        this.lastValue = event.target.value;
        this.props.onInput && this.props.onInput(event);
    }

    saveCaret(event) {
        if (this.getType() === 'text') {
            this.lastSelectionStart = event.target.selectionStart;
            this.lastSelectionEnd = event.target.selectionEnd;
            this.lastSelectionDirection = event.target.selectionDirection;
        }
    }

    getType() {
        let { type = 'text' } = this.props;

        return type;
    }

    render() {
        return html `<input _=${this.props}
            onInput=${this.handleInput}
            onBlur=${this.handleBlur}
            onFocus=${this.handleFocus}
            onChange=${this.handleChange}
            onKeyUp=${this.saveCaret}
            onMouseUp=${this.saveCaret}
            ref=${this.handleRef}
        />`;
    }
}

Input.autoBind = ['handleInput', 'handleRef', 'handleFocus', 'handleBlur', 'saveCaret', 'handleChange'];

export default Input;
