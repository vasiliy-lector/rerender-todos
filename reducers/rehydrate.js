import todos from './todos/rehydrate';

const reducers = [
    todos
];

export default function(methods) {
    for (let i = 0, l = reducers.length; i < l; i++) {
        reducers[i](methods);
    }
}
