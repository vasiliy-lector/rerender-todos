import { createAction } from 'rerender';
import routes from '../configs/routes';
import changeRoute from '../reducers/routes/changeRoute';

const navigateUrl = createAction(({ payload: url, actions, resolve, store }) => {
    var nextRoute = routes[url] || 'Error404';

    if (nextRoute !== store.state.routes.route) {
        actions.changeRoute(nextRoute);
        history.pushState({
            route: nextRoute
        }, '', url);
    }

    resolve();
}, { changeRoute });

export default navigateUrl;
