import { createReducer } from 'rerender';
import { buildStateByList } from './rehydrate';

const addTodos = createReducer(({ payload, state, setState }) => {
    let {
        todos: {
            list: prevList = []
        } = {}
    } = state;

    setState({
        todos: buildStateByList(prevList.concat(payload))
    });
});

export default addTodos;
