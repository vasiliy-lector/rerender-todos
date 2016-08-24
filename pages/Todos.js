import { html } from 'rerender';
import Layout from '../components/layout/Layout';
import TodoList from '../components/todoList/TodoList';

function Todos(){
    return html `<instance of=${Layout} title="todos">
        <instance of=${TodoList} buttonText="Add todo" />
        <a href="/">Go back</a>
    </instance>`;
}

Todos.initActions = [].concat(TodoList.initActions);

export default Todos;
