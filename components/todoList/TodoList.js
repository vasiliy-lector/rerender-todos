import { memoize } from 'ramda';
import { Component, connect, jsx } from 'rerender';
import TodoListItem from './TodoListItem';
import GET_TODOS from '../../events/todos/GET_TODOS';
import ADD_TODO from '../../events/todos/ADD_TODO';
import REMOVE_TODO from '../../events/todos/REMOVE_TODO';

class TodoList extends Component {
    init() {
        this.state.newTodoValue = '';
        this.bindRemove = memoize(this.bindRemove);
    }

    handleNewTodoRef(ref) {
        this.newTodoInput = ref;
    }

    handleSubmit(event) {
        this.dispatch(ADD_TODO, {
            text: this.state.newTodoValue
        });

        this.setState({ newTodoValue: '' });

        this.newTodoInput.reset();
        event.preventDefault();
    }

    handleInput() {
        this.setState({
            newTodoValue: this.newTodoInput.get('value')
        });
    }

    handleRemove(id) {
        this.dispatch(REMOVE_TODO, id);
    }

    bindRemove(id) {
        return this.handleRemove.bind(this, id);
    }

    render() {
        const { todos, buttonText } = this.props;
        const items = jsx `<ul className="todo-list__list">
            ${todos.map(todo => jsx `<${TodoListItem}
                key=${todo.id}
                todo=${todo}
                removeTodo=${this.bindRemove(todo.id)}
            />`)}
        </ul>`;

        return jsx `<div className="todo-list">
            ${items}
            <div className="todo-list__add">
                <form onsubmit=${this.handleSubmit}>
                    <input
                        ref=${this.handleNewTodoRef}
                        value=""
                        name="text"
                        autocomplete="off"
                        oninput=${this.handleInput}
                        placeholder="New todo" />
                    <button>${buttonText}</button>
                </form>
            </div>
            Text from input: "${this.state.newTodoValue}"
            ${this.children}
        </div>`;
    }
}

TodoList.antibind = ['handleSubmit', 'handleInput', 'handleNewTodoRef'];

const init = dispatch => dispatch(GET_TODOS);
const select = ({
    todos: {
        list: todos
    }
}) => ({ todos });

export default connect({ init, select })(TodoList);
