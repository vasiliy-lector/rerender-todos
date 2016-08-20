import { createReducer } from 'rerender';

const changeRoute = createReducer(({ payload: route, state, setState }) => {
    let {
        routes
    } = state;

    setState({
        routes: Object.assign({}, routes, { route })
    });
});

export default changeRoute;
