import { Component, html } from 'rerender';
import Input from '../input/Input';
import ComplexFormRow from './ComplexFormRow';

class ComplexForm extends Component {
    render() {
        return html `
            <form onSubmit=${this.handleSubmit}>
                <instance of=${ComplexFormRow} title="Фамилия">
                    <instance of=${Input}
                        name="lastName"
                        dataset=${{
                            validators: {
                                required: true,
                                regexp: /[а-яА-ЯёЁ \-]{1,30}/
                            }
                        }}
                        placeholder="Введите фамилию"
                    />
                </instance>
            </form>
        `;
    }
}

ComplexForm.autoBind = ['handleSubmit'];

ComplexForm.singleton = true;

export default ComplexForm;
