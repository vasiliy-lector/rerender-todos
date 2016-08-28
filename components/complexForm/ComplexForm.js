import { Component, html } from 'rerender';
import Input from '../input/Input';
import Textarea from '../textarea/Textarea';
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
                <instance of=${ComplexFormRow} title="Имя">
                    <instance of=${Input}
                        name="firstName"
                        dataset=${{
                            validators: {
                                required: true,
                                regexp: /[а-яА-ЯёЁ \-]{1,30}/
                            }
                        }}
                        placeholder="Введите Имя"
                    />
                </instance>
                <instance of=${ComplexFormRow} title="Дата рождения">
                    <instance of=${Input}
                        name="birthDate"
                        dataset=${{
                            mask: '____/__/__',
                            validators: {
                                required: true
                            }
                        }}
                        placeholder="DD.MM.YYYY"
                    />
                </instance>
                <instance of=${ComplexFormRow} title="A little about yourself">
                    <instance of=${Textarea}
                        name="about"
                        rows="10"
                        value="Initial text"
                        placeholder="Text here" />
                </instance>
                <instance of=${ComplexFormRow} title="Sex" label=${false}>
                    <p>
                        <label>
                            <instance of=${Input}
                                name="sex"
                                value="man"
                                type="radio"
                                dataset=${{
                                    validators: {
                                        required: true
                                    }
                                }}
                            /> Man
                        </label>
                    </p>
                    <p>
                        <label>
                            <instance of=${Input}
                                name="sex"
                                value="woman"
                                type="radio"
                                dataset=${{
                                    validators: {
                                        required: true
                                    }
                                }}
                            /> Woman
                        </label>
                    </p>
                </instance>
                <instance of=${ComplexFormRow} title="Agreement" label=${false}>
                    <p>
                        <label>
                            <instance of=${Input}
                                name="agree"
                                value="true"
                                type="checkbox"
                            /> I agree
                        </label>
                    </p>
                </instance>
            </form>
        `;
    }
}

ComplexForm.autoBind = ['handleSubmit'];

ComplexForm.singleton = true;

export default ComplexForm;
