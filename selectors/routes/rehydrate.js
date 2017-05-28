import { path } from 'ramda';

export default function rehydrate(state) {
    if (!path(['routes'], state)) {
        state.routes = {};
    }

    return state;
}
