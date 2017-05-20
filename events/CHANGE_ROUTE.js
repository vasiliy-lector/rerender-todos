import Event from 'rerender';
import changeRoute from './reducers/routes/changeRoute';

const CHANGE_ROUTE = new Event({
    name: 'CHANGE_ROUTE',
    cache: true,
    userIndependent: true,
    reducers: [ changeRoute ]
});

export default CHANGE_ROUTE;
