export default function changeRoute({ setState, getState }, route) {
    setState(['routes', 'route'], route);
}
