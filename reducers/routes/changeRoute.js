export default function changeRoute({ setState, getState }, route) {
    const {
        routes
    } = getState();

    const nextRoutes = Object.assign({}, routes);
    nextRoutes.route = route;

    setState({
        routes: nextRoutes
    });
}
