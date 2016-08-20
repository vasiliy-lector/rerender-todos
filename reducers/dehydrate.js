import dehydrateTodos from './todos/dehydrate';

export default function dehydrate(state) {
    let { todos } = state;

    return Object.assign(
        {},
        state,
        {
            todos: dehydrateTodos(todos)
        }
    );
}
