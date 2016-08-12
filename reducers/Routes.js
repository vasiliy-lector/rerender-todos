import { Reducer } from 'rerender';

class Routes extends Reducer {

    dehydrate(state = {}) {
        return {
            route: state.route
        };
    }

    rehydrate(state = {}) {
        return { route: state.route };
    }
}

Routes.path = 'routes';

export default Routes;
