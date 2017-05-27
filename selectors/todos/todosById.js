function todosById(todos = []) {
    return todos.reduce((memo, item) => {
        memo[item.id] = item;

        return memo;
    }, {});
}

export default todosById;
