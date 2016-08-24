import { html } from 'rerender';

function ComplexFormRow({ title }, children) {
    return html `<div className="complex-form__row">
        <label>
            <div className="complex-form__row-title">
                ${title}
            </div>
            <div className="complex-form__row-component">
                ${children}
            </div>
        </label>
    </div>`;
}

ComplexFormRow.types = {
    title: 'string'
};

export default ComplexFormRow;
