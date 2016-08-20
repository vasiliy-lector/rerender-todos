import { Component, connect, html } from 'rerender';
import changeRoute from '../../reducers/routes/changeRoute';
import * as pages from '../../pages/pages';

class Application extends Component {
    componentDidMount() {
        window.onpopstate = this.handlePopState;
        history.replaceState({
            route: this.props.route
        }, '');
    }

    handlePopState(event) {
        this.props.changeRoute(event.state.route);
    }

    render() {
        let PageComponent = pages[this.props.route || 'Index'];

        return html `<instance of=${PageComponent} />`;
    }
}

Application.singleton = true;
Application.autoBind = ['handlePopState'];

const get = ({ routes = {} }) => {
        return {
            route: routes.route
        };
    },
    watch = 'routes',
    actions = {
        changeRoute
    };

export default connect({ actions, watch, get })(Application);
