import { createAction } from 'rerender';
import routes from '../configs/routes';
import changeRouteReducer from '../reducers/routes/changeRoute';

const changeRoute = createAction(({ payload: url, actions, resolve, store }) => {
    var nextRoute = routes[url] || 'Error404Page';

    if (nextRoute !== store.state.routes.route) {
        actions.changeRouteReducer(nextRoute);
        history.pushState({
            route: nextRoute
        }, '', url);
    }

    resolve();
}, { changeRouteReducer });

export default changeRoute;
