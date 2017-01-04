import { jsx } from 'rerender';
import Item from './TodoListItem';

function TodoListItems({ removeTodo, todos }) {
    return jsx `<ul className="todo-list__list">
        ${todos.map(todo => jsx `<${Item}
            key=${todo.id}
            removeTodo=${removeTodo}
            todo=${todo} />`)}
    </ul>`;
}

TodoListItems.types = {
    removeTodo: 'function',
    todos: 'array'
};

export default TodoListItems;
