import { Component, connect, html } from 'rerender';
import Input from '../input/Input';
import Button from '../button/Button';
import Items from './TodoListItems';
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
        let { removeTodo, todos } = this.props;

        return html `<div className="todo-list">
            <instance of=${Items}
                todos=${todos}
                removeTodo=${removeTodo} />
            <div className="todo-list__add">
                <form onSubmit=${this.handleSubmit}>
                    <instance of=${Input}
                        name="text"
                        autocomplete="off"
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
    addTodo: 'function',
    removeTodo: 'function'
};

TodoList.required = ['todos'];
TodoList.singleton = true;

TodoList.initActions = [getTodos];

TodoList.autoBind = ['handleSubmit', 'handleInput'];

const
    get = function({
        todos: {
            list: todos
        }
    }) {
        return {
            todos
        };
    },
    actions = {
        addTodo,
        removeTodo
    },
    watch = 'todos';

export default connect({ watch, get, actions })(TodoList);
