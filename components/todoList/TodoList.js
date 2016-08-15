import { Component, connect, html } from 'rerender';
import Input from '../input/Input';
import Button from '../button/Button';
import Item from './TodoListItem';
import getTodos from '../../actions/getTodos';
import addTodo from '../../actions/addTodo';
import removeTodo from '../../actions/removeTodo';

class TodoList extends Component {
    init() {
        this.state.newTodoValue = '';
    }

    handleSubmit(event) {
        this.props.addTodo({
            text: this.state.newTodoValue
        });

        this.setState({
            newTodoValue: ''
        });
        event.target.reset();

        event.preventDefault();
    }

    handleInput(event) {
        this.setState({
            newTodoValue: event.target.value
        });
    }

    render() {
        let { todos = [] } = this.props;

        return html `<div className="todo-list">
            <ul className="todo-list__list">
                ${todos.map(todo => html `<instance of=${Item}
                    removeTodo=${this.props.removeTodo}
                    todo=${todo} />`)}
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
            Вы ввели текст: "${this.state.newTodoValue}"
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
        addTodo,
        removeTodo
    };

export default connect({ get, actions })(TodoList);
