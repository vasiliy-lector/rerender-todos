import { html } from 'rerender';
import Layout from '../components/layout/Layout';

function Second(){
    return html `<instance of=${Layout} title="Title of second page">
        <p>Demo second page</p>
    </instance>`;
}

export default Second;
