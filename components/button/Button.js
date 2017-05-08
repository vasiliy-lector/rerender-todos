import { jsx } from 'rerender';

function Button(props, children) {
    return jsx `<button ${props}>
        ${children}
    </button>`;
}

export default Button;
