import todos from './todos/dehydrate';
import routes from './routes/dehydrate';

const actions = {
    todos,
    routes
};

export default function dehydrate(methods, pick) {
    const picked = pick
        ? Object.keys(actions).reduce((memo, key) => {
            if (pick.indexOf(key) !== -1) {
                memo[key] = actions[key];
            }

            return memo;
        }, {})
        : actions;

    const result = {};

    for (let name in picked) {
        result[name] = picked[name](methods);
    }

    return result;
}
