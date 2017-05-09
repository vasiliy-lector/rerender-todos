import { Component, connect, jsx } from 'rerender';
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

    handleNewTodoRef(ref) {
        this.newTodoInput = ref;
    }

    handleSubmit(event) {
        this.props.addTodo({
            text: this.state.newTodoValue
        });

        this.setState({
            newTodoValue: ''
        });

        this.newTodoInput.reset();
        event.preventDefault();
    }

    handleInput(event) {
        this.setState({
            newTodoValue: event.target.value
        });
    }

    render() {
        const { removeTodo, todos, buttonText } = this.props;

        return jsx `<div className="todo-list">
            <${Items}
                todos=${todos}
                removeTodo=${removeTodo} />
            <div className="todo-list__add">
                <form onSubmit=${this.handleSubmit}>
                    <${Input}
                        ref=${this.handleNewTodoRef}
                        name="text"
                        autocomplete="off"
                        onInput=${this.handleInput}
                        placeholder="New todo" />
                    <${Button}>${buttonText}</${Input}>
                </form>
            </div>
            Вы ввели текст: "${this.state.newTodoValue}"
            ${this.children}
        </div>`;
    }
}

TodoList.initActions = [getTodos];

TodoList.antibind = ['handleSubmit', 'handleInput', 'handleNewTodoRef'];

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
