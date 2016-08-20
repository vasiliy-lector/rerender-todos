import { createReducer } from 'rerender';
import { buildStateByList } from './rehydrate';

const addTodo = createReducer(({ payload, state, setState }) => {
    let {
            todos: {
                list: prevList,
                byId: prevById
            }
        } = state,
        id,
        newTodo;

    if (!payload.id) {
        let allIds = Object.keys(prevById);

        id = allIds.length > 0 ? Math.max.apply(Math, allIds) + 1 : 0,
        newTodo = Object.assign({}, payload, {
            id
        });
    } else {
        newTodo = payload;
    }

    setState({
        todos: buildStateByList(prevList.concat([newTodo]))
    });
});

export default addTodo;
