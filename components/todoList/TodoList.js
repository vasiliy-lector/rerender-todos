import { Component, connect, html } from 'rerender';
import Input from '../input/Input';
import Button from '../button/Button';
import Item from './TodoListItem';
import getTodos from '../../actions/GetTodos';
import addTodo from '../../actions/AddTodo';

class TodoList extends Component {
    init() {
        this.newTodoValue = '';
    }

    handleSubmit(event) {
        this.props.addTodo({
            text: this.newTodoValue
        });

        this.newTodoValue = '';
        event.target.reset();

        event.preventDefault();
    }

    handleInput(event) {
        this.newTodoValue = event.target.value;
    }

    render() {
        let { todos = [] } = this.props;

        return html `<div className="todo-list">
            <ul className="todo-list__list">
                ${todos.map(todo => html `<instance of=${Item} todo=${todo} />`)}
            </ul>
            <div className="todo-list__add">
                <form onSubmit=${this.handleSubmit}>
                    <instance of=${Input}
                        name="text"
                        onInput=${this.handleInput}
                        placeholder="New todo" />
                    <instance of=${Button}>${this.props.buttonText}</instance>
                </form>
            </div>
            ${this.children}
        </div>`;
    }
}

TodoList.types = {
    todos: 'array',
    todosById: 'object'
};
TodoList.defaults = {
    todosById: {}
};
TodoList.required = ['todos'];
TodoList.singleton = true;

TodoList.initActions = [getTodos];
TodoList.actions = { addTodo };

TodoList.autoBind = ['handleSubmit', 'handleInput'];

const
    get = function({
        todos: {
            todos = [],
            todosById = {}
        } = {}
    } = {}) {
        return {
            todos,
            todosById
        };
    },
    actions = {
        addTodo
    };

export default connect({ get, actions })(TodoList);
