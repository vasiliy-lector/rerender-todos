import { html } from 'rerender';
import Layout from '../components/layout/Layout';
import TodoList from '../components/todoList/TodoList';
import Link from '../components/link/Link';

function Index(){
    return html `<instance of=${Layout} title="todos">
        <instance of=${TodoList} buttonText="Add todo" />
        <p><instance of=${Link}
            href="/second/">Go second page</instance>
    </instance>`;
}

Index.initActions = [].concat(TodoList.initActions);

export default Index;
