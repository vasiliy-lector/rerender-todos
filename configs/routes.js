const routes = {
    '/': {
        page: 'Index',
        title: 'Main page'
    },
    '/todos': {
        page: 'Todos',
        title: 'Todos page'
    },
    '/todos/:id': {
        page: 'Todo',
        title: 'Todos page'
    },
    '/forms': {
        page: 'Forms',
        title: 'Forms page'
    },
    '/404': {
        page: 'Error404',
        title: 'Not found'
    }
};

export default routes;
