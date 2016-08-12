import { Component, connect, html } from 'jsunit';
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
                ${todos.map(todo => html `<unit Class=${Item} todo=${todo} />`)}
            </ul>
            <div class="todo-list__add">
                <unit Class=${Input} placeholder="New todo" />
                <unit Class=${Button} onClick=${this.handleNewTodo}>${this.props.buttonText}</unit>
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
