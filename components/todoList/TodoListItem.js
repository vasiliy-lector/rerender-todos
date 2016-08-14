import { Component, html } from 'rerender';
import Button from '../button/Button';

class TodoListItem extends Component {
    handleSave() {
        this.props.actions.EditTodo({});
    }

    handleRemove() {
        let { id } = this.props.todo;

        this.props.removeTodo(id);
    }

    render() {
        let { todo } = this.props;

        return html `<li className="todo-list__item">
            ${todo.text}
            <instance of=${Button}
                className="todo-list__remove"
                onClick=${this.handleRemove}>Удалить</instance>
        </li>`;
    }
}

TodoListItem.autoBind = ['handleSave', 'handleRemove'];

export default TodoListItem;
