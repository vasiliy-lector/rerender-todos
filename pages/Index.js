import { Component, html } from 'rerender';
import TodoList from '../components/todoList/TodoList';
import Layout from '../components/layout/Layout';

class Index extends Component {
    render() {
        return html `<instance of=${Layout} title="todos">
            <instance of=${TodoList} buttonText="Add todo" />
        </instance>`;
    }
}

Index.singleton = true;

Index.initActions = [].concat(TodoList.initActions);

export default Index;
