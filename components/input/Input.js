import { Component, html } from 'rerender';

class Input extends Component {
    handleSetRef(domNode) {
        if (typeof this.lastValue !== 'undefined') {
            domNode.value = this.lastValue;
            if (this.focused) {
                let defaultCaret = this.lastValue.length,
                    {
                        lastSelectionStart = defaultCaret,
                        lastSelectionEnd = defaultCaret,
                        lastSelectionDirection = 'none'
                    } = this;

                domNode.focus();
                domNode.setSelectionRange(lastSelectionStart, lastSelectionEnd, lastSelectionDirection);
            }
        }
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

    handleInput(event) {
        this.lastValue = event.target.value;
        this.props.onInput && this.props.onInput(event);
    }

    saveCaret(event) {
        this.lastSelectionStart = event.target.selectionStart;
        this.lastSelectionEnd = event.target.selectionEnd;
        this.lastSelectionDirection = event.target.selectionDirection;
    }

    render() {
        return html `<input _=${this.props}
            onInput=${this.handleInput}
            onBlur=${this.handleBlur}
            onFocus=${this.handleFocus}
            onKeyUp=${this.saveCaret}
            onMouseUp=${this.saveCaret}
            onSetRef=${this.handleSetRef} />`;
    }
}

Input.autoBind = ['handleInput', 'handleSetRef', 'handleFocus', 'handleBlur', 'saveCaret'];

export default Input;
