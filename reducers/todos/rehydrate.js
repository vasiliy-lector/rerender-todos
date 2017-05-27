import { pathOr } from 'ramda';

export default function rehydrate({ setState }, state) {
    const nextList = pathOr([], ['todos', 'list'], state);

    setState(nextList, ['todos', 'list']);
}
