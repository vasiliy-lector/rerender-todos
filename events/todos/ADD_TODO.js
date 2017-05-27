import addTodo from '../../actions/todos/addTodo';
import addTodo from '../../reducers/todos/addTodo';

export default {
    name: 'ADD_TODO',
    cache: true,
    action: addTodo,
    reducers: [ addTodo ]
};
