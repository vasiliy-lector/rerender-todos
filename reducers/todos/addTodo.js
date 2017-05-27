export default function addTodo({ setState, getState }, newTodo) {
    const nextTodos = [
        ...getState(['todos', 'list']),
        newTodo
    ];

    setState(nextTodos, ['todos', 'list']);
}
