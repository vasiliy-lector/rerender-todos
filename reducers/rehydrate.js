import todos from './todos/rehydrate';
import routes from './routes/rehydrate';

const reducers = [
    todos,
    routes
];

export default function rehydrate(methods, dehydrated = {}) {
    for (let i = 0, l = reducers.length; i < l; i++) {
        reducers[i](methods, dehydrated);
    }
}
