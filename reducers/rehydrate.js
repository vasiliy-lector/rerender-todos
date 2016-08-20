import rehydrateTodos from './todos/rehydrate';

export default function rehydrate(state) {
    let { todos } = state;

    return Object.assign(
        {},
        state,
        {
            todos: rehydrateTodos(todos)
        }
    );
}
