import getTodos from '../actions/getTodos';
import addTodos from '../reducers/addTodos';

export default {
    name: 'ADD_TODO',
    cache: true,
    action: getTodos,
    reducers: [ addTodos ]
};
