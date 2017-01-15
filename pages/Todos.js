import Layout from '../components/layout/Layout';
import TodoList from '../components/todoList/TodoList';

function Todos({ jsx }){
    return jsx `<${Layout} title="todos">
        <${TodoList} buttonText="Add todo" />
        <a href="/">Go back</a>
    </${Layout}>`;
}

Todos.initActions = [].concat(TodoList.initActions);

export default Todos;
