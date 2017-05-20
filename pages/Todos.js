import { jsx } from 'rerender';
import Layout from '../components/layout/Layout';
import TodoList from '../components/todoList/TodoList';

function Todos(){
    return jsx `<${Layout} title="todos">
        <${TodoList} buttonText="Add todo" />
        <a href="/">Go back</a>
    </${Layout}>`;
}

export default Todos;
