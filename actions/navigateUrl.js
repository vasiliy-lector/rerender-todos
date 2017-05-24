import routes from '../configs/routes';
import SET_ROUTE from '../events/SET_ROUTE';

export default function navigateUrl({ getState, dispatch }, url) {
    var nextRoute = routes[url] || routes['/404'];

    if (nextRoute !== getState().routes.route) {
        dispatch(SET_ROUTE, nextRoute);
        history.pushState({
            route: nextRoute
        }, '', url);
    }
}
