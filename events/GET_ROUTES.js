import Event from 'rerender';
import getRoutes from './actions/getRoutes';
import setRoutes from './reducers/routes/setRoutes';

const GET_ROUTES = new Event({
    name: 'GET_ROUTES',
    cache: true,
    userIndependent: true,
    action: getRoutes,
    reducers: [ setRoutes ]
});

export default GET_ROUTES;
