import { jsx } from 'rerender';
import Layout from '../components/layout/Layout';
import ComplexForm from '../components/complexForm/ComplexForm';

function Forms(){
    return jsx `<${Layout} title="forms">
        <${ComplexForm} />
    </${Layout}>`;
}

export default Forms;
