import { Action } from 'rerender';

class RemoveTodo extends Action {
    execute({ payload: id, store }) {
        store.emit('REMOVE_TODO', id);
    }
}

export default RemoveTodo;
