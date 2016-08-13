import { html } from 'rerender';

function Button(props, children) {
    return html `<button _=${props}>
        ${children}
    </button>`;
}

export default Button;
