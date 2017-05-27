import { Component, jsx } from 'rerender';
import Button from '../button/Button';
import REMOVE_TODO from '../../events/todos/REMOVE_TODO';

class TodoListItem extends Component {
    handleRemove() {
        this.dispatch(REMOVE_TODO, this.props.todo.id);
    }

    render() {
        const { todo } = this.props;

        return jsx `<li className="todo-list__item">
            ${todo.text}
            <${Button}
                className="todo-list__remove"
                onclick=${this.handleRemove}>Удалить</${Button}>
        </li>`;
    }
}

TodoListItem.antibind = ['handleRemove'];

export default TodoListItem;
