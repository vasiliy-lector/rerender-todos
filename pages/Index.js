import { jsx } from 'rerender';
import Layout from '../components/layout/Layout';
import ComplexForm from '../components/complexForm/ComplexForm';

function Index(){
    return jsx `<${Layout} title="todos">
        <p><a href="/todos/">Todos</a></p>
        <p><a href="/second/">Go empty page</a></p>
        <p><a href="/forms/">Forms</a></p>
        <p><a href="/no-exist/">Bad link</a></p>
        <${ComplexForm} />
    </${Layout}>`;
}

export default Index;
