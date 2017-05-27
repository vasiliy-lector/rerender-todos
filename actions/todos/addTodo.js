export default function addTodo(methods, todo) {
    return {
        text: todo.text,
        id: 'id' + Date.now() + Math.random() * 1000
    };
}
