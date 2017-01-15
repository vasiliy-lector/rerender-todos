function Button({ props, children, jsx }) {
    return jsx `<button ${props}>
        ${children}
    </button>`;
}

export default Button;
