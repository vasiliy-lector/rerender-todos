import Button from '../button/Button';

function TodoListItem({ props: { todo: { text, id }, removeTodo }, jsx }) {
    return jsx `<li className="todo-list__item">
        ${text}
        <${Button}
            className="todo-list__remove"
            onClick=${() => removeTodo(id)}>Удалить</${Button}>
    </li>`;
}

export default TodoListItem;
