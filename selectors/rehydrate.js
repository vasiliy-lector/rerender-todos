import todos from './todos/rehydrate';

const selectors = [
    todos
];

export default function rehydrate(state) {
    let nextState = state;

    for (let i = 0, l = selectors.length; i < l; i++) {
        nextState = selectors[i](state);
    }

    return nextState;
}
