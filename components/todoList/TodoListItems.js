import Item from './TodoListItem';

function TodoListItems({ props: { removeTodo, todos }, jsx }) {
    return jsx `<ul className="todo-list__list">
        ${todos.map(todo => jsx `<${Item}
            key=${todo.id}
            removeTodo=${removeTodo}
            todo=${todo} />`)}
    </ul>`;
}

export default TodoListItems;
