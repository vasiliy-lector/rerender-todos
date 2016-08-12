import { Component, html } from 'rerender';
import Button from '../button/Button';

class TodoListItem extends Component {
    handleSave() {
        this.props.actions.EditTodo({});
    }

    handleRemove() {
        this.props.actions.RemoveTodo({ id: this.props.todo.id });
    }

    render() {
        let { children, todo } = this.props;
        return html `<li class="todo-list__item">
            ${todo.text}
            ${children}
            <instance of=${Button} class="todo-list__edit" onClick=${this.handleEdit}>edit</instance>
            <instance of=${Button} class="todo-list__remove" onClick=${this.handleRemove}>remove</instance>
        </li>`;
    }
}

TodoListItem.autoBind = ['handleSave', 'handleRemove'];

export default TodoListItem;
