import { html } from 'jsunit';

function Button({
    text = '',
    onClick
} = {}, children) {
    return html `<button onclick=${onClick}>
        ${text}
        ${children}
    </button>`;
}

Button.types = {
    text: 'string',
    onClick: 'function'
};

export default Button;
