import { createReducer } from 'rerender';
import { buildStateByList } from './rehydrate';

const removeTodo = createReducer(({ payload: id, state, setState }) => {
    let {
            todos: {
                list
            }
        } = state;

    setState({
        todos: buildStateByList(list.reduce((memo, item) => {
            if (item.id !== id) {
                memo.push(item);
            }

            return memo;
        }, []))
    });

});

export default removeTodo;
