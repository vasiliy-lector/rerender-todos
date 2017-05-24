import getRoutes from '../actions/getRoutes';
import setRoutes from '../reducers/routes/setRoutes';

export default {
    name: 'GET_ROUTES',
    cache: true,
    userIndependent: true,
    action: getRoutes,
    reducers: [ setRoutes ]
};
