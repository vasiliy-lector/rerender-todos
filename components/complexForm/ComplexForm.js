import { Component } from 'rerender';
import Input from '../input/Input';
import Textarea from '../textarea/Textarea';
import ComplexFormRow from './ComplexFormRow';

class ComplexForm extends Component {
    render({ jsx }) {
        return jsx `
            <form onSubmit=${this.handleSubmit}>
                <${ComplexFormRow} title="Фамилия">
                    <${Input}
                        name="lastName"
                        dataset=${{
                            validators: {
                                required: true,
                                regexp: /[а-яА-ЯёЁ \-]{1,30}/
                            }
                        }}
                        placeholder="Введите фамилию"
                    />
                </${ComplexFormRow}>
                <${ComplexFormRow} title="Имя">
                    <${Input}
                        name="firstName"
                        dataset=${{
                            validators: {
                                required: true,
                                regexp: /[а-яА-ЯёЁ \-]{1,30}/
                            }
                        }}
                        placeholder="Введите Имя"
                    />
                </${ComplexFormRow}>
                <${ComplexFormRow} title="Дата рождения">
                    <${Input}
                        name="birthDate"
                        dataset=${{
                            mask: '____/__/__',
                            validators: {
                                required: true
                            }
                        }}
                        placeholder="DD.MM.YYYY"
                    />
                </${ComplexFormRow}>
                <${ComplexFormRow} title="A little about yourself">
                    <${Textarea}
                        name="about"
                        rows="10"
                        value="Initial text"
                        placeholder="Text here" />
                </${ComplexFormRow}>
                <${ComplexFormRow} title="Sex" label=${false}>
                    <p>
                        <label>
                            <${Input}
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
                            <${Input}
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
                </${ComplexFormRow}>
                <${ComplexFormRow} title="Agreement" label=${false}>
                    <p>
                        <label>
                            <${Input}
                                name="agree"
                                value="true"
                                type="checkbox"
                            /> I agree
                        </label>
                    </p>
                </${ComplexFormRow}>
            </form>
        `;
    }
}

ComplexForm.antibind = ['handleSubmit'];

ComplexForm.singleton = true;

export default ComplexForm;
