import todos from './todos/rehydrate';
import routes from './routes/rehydrate';

const selectors = [
    todos,
    routes
];

export default function rehydrate(state) {
    let nextState = state;

    for (let i = 0, l = selectors.length; i < l; i++) {
        nextState = selectors[i](state);
    }

    return nextState;
}
