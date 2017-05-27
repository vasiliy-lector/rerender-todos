import { jsx } from 'rerender';
import Button from '../button/Button';

export default function TodoListItem({ todo, onRemove }) {
    return jsx `<li className="todo-list__item">
        ${todo.text}
        <${Button}
            className="todo-list__remove"
            onclick=${onRemove}>Удалить</${Button}>
    </li>`;
}
