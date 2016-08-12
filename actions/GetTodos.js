import { createAction } from 'rerender';
import initialState from '../configs/initialState';

const GetTodos = createAction(({ store, resolve }) => {
    store.emit('TODOS_LOADED', initialState.todos.todos);
    resolve();
});

export default GetTodos;
