import { jsx } from 'rerender';
import Layout from '../components/layout/Layout';

function Second(){
    return jsx `<${Layout} title="Title of second page">
        <p>Demo second page</p>
    </${Layout}>`;
}

export default Second;
