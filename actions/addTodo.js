import { createAction } from 'rerender';
import addTodoReducer from '../reducers/todos/addTodo';

const addTodo = createAction(({ payload, actions }) => {
    actions.addTodo(payload);
}, { addTodo: addTodoReducer });

export default addTodo;
