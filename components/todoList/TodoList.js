import { Component, connect, html } from 'rerender';
import Input from '../input/Input';
import Button from '../button/Button';
import Item from './TodoListItem';
import getTodos from '../../actions/GetTodos';
import addTodo from '../../actions/AddTodo';

class TodoList extends Component {
    handleNewTodo() {
        this.props.addTodo({
            text: 'new todo'
        });
    }

    render() {
        let { todos = [] } = this.props;

        return html `<div class="todo-list">
            <ul class="todo-list__list">
                ${todos.map(todo => html `<instance of=${Item} todo=${todo} />`)}
            </ul>
            <div class="todo-list__add">
                <instance of=${Input} placeholder="New todo" />
                <instance of=${Button} onClick=${this.handleNewTodo}>${this.props.buttonText}</instance>
            </div>
            ${this.props.children}
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

TodoList.autoBind = ['handleNewTodo'];

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
