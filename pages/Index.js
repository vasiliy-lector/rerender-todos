import { html } from 'rerender';
import TodoList from '../components/todoList/TodoList';
import Layout from '../components/layout/Layout';

function Index(){
    return html `<instance of=${Layout} title="todos">
        <instance of=${TodoList} buttonText="Add todo" />
    </instance>`;
}

Index.initActions = [].concat(TodoList.initActions);

export default Index;
