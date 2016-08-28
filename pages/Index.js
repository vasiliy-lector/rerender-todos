import { html } from 'rerender';
import Layout from '../components/layout/Layout';
import ComplexForm from '../components/complexForm/ComplexForm';

function Index(){
    return html `<instance of=${Layout} title="todos">
        <p><a href="/todos/">Todos</a></p>
        <p><a href="/second/">Go empty page</a></p>
        <p><a href="/forms/">Forms</a></p>
        <p><a href="/no-exist/">Bad link</a></p>
        <instance of=${ComplexForm} />
    </instance>`;
}

export default Index;
