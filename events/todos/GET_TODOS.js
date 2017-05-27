import getTodos from '../../actions/todos/getTodos';
import addTodos from '../../reducers/todos/addTodos';

export default {
    name: 'GET_TODOS',
    cache: true,
    action: getTodos,
    reducers: [ addTodos ]
};
