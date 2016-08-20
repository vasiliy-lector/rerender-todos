import { Component, connect, html } from 'rerender';
import * as pages from '../../pages/pages';

class Application extends Component {
    // componentDidMount() {
    //     window.onpopstate = this.onPopState.bind(this);
    //     history.replaceState({
    //         route: this.props.route
    //     }, '');
    // }
    //
    // onPopState(event) {
    //     this.props.dispatch(changeRoute(event.state.route));
    // }

    render() {
        let PageComponent = pages[this.props.route || 'Index'];

        return html `<instance of=${PageComponent} />`;
    }
}

Application.singleton = true;

const get = ({ routes = {} }) => {
        return {
            route: routes.route
        };
    },
    watch = 'routes';

export default connect({ watch, get })(Application);
