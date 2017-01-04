import { jsx } from 'rerender';

function ComplexFormRow({ title, label }, children) {
    return jsx `<div className="complex-form__row">
        <div className="complex-form__row-title">
            ${label ? jsx `<label>${title}</label>` : title}
        </div>
        <div className="complex-form__row-component">
            ${children}
        </div>
    </div>`;
}

ComplexFormRow.types = {
    title: 'string',
    label: 'boolean'
};

ComplexFormRow.defaults = {
    label: true
};

export default ComplexFormRow;
