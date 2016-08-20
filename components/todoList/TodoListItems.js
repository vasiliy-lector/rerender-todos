import { html } from 'rerender';
import Item from './TodoListItem';

function TodoListItems({ removeTodo, todos }) {
    return html `<ul className="todo-list__list">
        ${todos.map(todo => html `<instance of=${Item}
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
