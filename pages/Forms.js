import { html } from 'rerender';
import Layout from '../components/layout/Layout';
import ComplexForm from '../components/complexForm/ComplexForm';

function Forms(){
    return html `<instance of=${Layout} title="forms">
        <instance of=${ComplexForm} />
    </instance>`;
}

export default Forms;
