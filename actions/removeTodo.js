import { createAction } from 'rerender';
import removeTodoReducer from '../reducers/todos/removeTodo';

const removeTodo = createAction(({ payload: id, actions }) => {
    actions.removeTodoReducer(id);
}, { removeTodoReducer });

export default removeTodo;
