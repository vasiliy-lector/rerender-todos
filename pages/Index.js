import { Component, html } from 'rerender';
import TodoList from '../components/todoList/TodoList';
import Layout from '../components/layout/Layout';

class Index extends Component {
    render() {
        return html `<instance of=${Layout}>
            <h1>Todo list</h1>
            <instance of=${TodoList} buttonText="Add todo">
                <p>Text after todos. 1 + 2 = ${ 1 + 2 }</p>
            </instance>
        </instance>`;
    }
}

Index.singleton = true;

Index.initActions = [].concat(TodoList.initActions);

export default Index;
