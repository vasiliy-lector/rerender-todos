import initialState from '../../configs/initialState';
import ADD_TODOS from '../../event/todos/ADD_TODOS';

export default function getTodos({ dispatch }) {
    return dispatch(ADD_TODOS, initialState.todos.list);
}
