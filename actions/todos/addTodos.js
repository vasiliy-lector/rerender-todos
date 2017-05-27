export default function addTodos({ getState, setState }, newTodos) {
    if (!Array.isArray(newTodos)) {
        return;
    }

    const nextTodos = [
        ...getState().todos.list
    ];

    for (let i = 0, l = newTodos.length; i < l; i++) {
        nextTodos.push({
            value: nextTodos[i],
            id: 'id' + Date.now() + Math.random() * 1000
        });
    }

    setState(nextTodos, ['todos', 'list']);
}
