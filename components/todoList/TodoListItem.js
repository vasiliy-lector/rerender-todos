import { Component, jsx } from 'rerender';
import Button from '../button/Button';

class TodoListItem extends Component {
    handleRemove() {
        this.props.removeTodo(this.props.todo.id);
    }

    render() {
        const {
            todo: {
                text
            }
        } = this.props;

        return jsx `<li className="todo-list__item">
            ${text}
            <${Button}
                className="todo-list__remove"
                onClick=${this.handleRemove}>Удалить</${Button}>
        </li>`;
    }
}

TodoListItem.antibind = ['handleRemove'];

export default TodoListItem;
