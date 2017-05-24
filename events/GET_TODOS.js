import getTodos from '../actions/getTodos';
import addTodos from '../reducers/addTodos';

export default {
    name: 'GET_TODOS',
    cache: true,
    action: getTodos,
    reducers: [ addTodos ]
};
