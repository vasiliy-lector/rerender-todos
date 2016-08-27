import { html } from 'rerender';
import InputText from './InputText';
import InputCheckbox from './InputCheckbox';
import InputRadio from './InputRadio';
import InputDefault from './InputDefault';

const inputsByType = {
    text: InputText,
    checkbox: InputCheckbox,
    radio: InputRadio,
    default: InputDefault
};

function Input(props, children) {
    const { type = 'text' } = props,
        InputOfType = inputsByType[type] || inputsByType['default'];

    return html `<instance of=${InputOfType} _=${props}>${children}</instance>`;
}

export default Input;
