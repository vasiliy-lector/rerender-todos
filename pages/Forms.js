import Layout from '../components/layout/Layout';
import ComplexForm from '../components/complexForm/ComplexForm';

function Forms({ jsx }){
    return jsx `<${Layout} title="forms">
        <${ComplexForm} />
    </${Layout}>`;
}

export default Forms;
