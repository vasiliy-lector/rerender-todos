function ComplexFormRow({ props: { title, label }, children, jsx }) {
    return jsx `<div className="complex-form__row">
        <div className="complex-form__row-title">
            ${label ? jsx `<label>${title}</label>` : title}
        </div>
        <div className="complex-form__row-component">
            ${children}
        </div>
    </div>`;
}

ComplexFormRow.defaults = {
    label: true
};

export default ComplexFormRow;
