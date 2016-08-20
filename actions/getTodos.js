import { createAction } from 'rerender';
import initialState from '../configs/initialState';
import addTodos from '../reducers/todos/addTodos';

const getTodos = createAction(({ resolve, actions }) => {
    actions.addTodos(initialState.todos.list);
    resolve();
}, {
    addTodos
});

export default getTodos;
