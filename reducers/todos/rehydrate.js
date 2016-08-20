const buildStateByList = function(list) {
    let byId = list.reduce((memo, item) => {
        memo[item.id] = item;

        return memo;
    }, {});

    return {
        list,
        byId
    };
};

export default function rehydrate(todos = {}) {
    let { list = [] } = todos;

    return buildStateByList(list);
}

export { buildStateByList };
