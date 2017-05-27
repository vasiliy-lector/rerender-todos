import { path, set, lensPath } from 'ramda';

const setList = set(lensPath(['todos', 'list']));

export default function rehydrate(state) {
    let nextState = state;

    if (!path(['todos', 'list'], state)) {
        nextState = setList([], state);
    }

    return nextState;
}
