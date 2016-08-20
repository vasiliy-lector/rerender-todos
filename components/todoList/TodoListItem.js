import { html } from 'rerender';
import Button from '../button/Button';

function TodoListItem({ todo: { text, id }, removeTodo }) {
    return html `<li className="todo-list__item">
        ${text}
        <instance of=${Button}
            className="todo-list__remove"
            onClick=${() => removeTodo(id)}>Удалить</instance>
    </li>`;
}

export default TodoListItem;
