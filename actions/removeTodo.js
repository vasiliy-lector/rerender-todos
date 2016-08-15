import { createAction } from 'rerender';

const removeTodo = createAction(({ payload: id, store }) => {
    store.emit('REMOVE_TODO', id);
});

export default removeTodo;
