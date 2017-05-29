import { Component, connect, jsx } from 'rerender';
import SET_ROUTE from '../../events/routes/SET_ROUTE';
import NAVIGATE_TO_URL from '../../events/routes/NAVIGATE_TO_URL';
import PageLoader from '../pageLoader/PageLoader';

class Application extends Component {
    init() {
        this.on('link:clicked', this.handleClick);
    }

    componentDidMount() {
        const { window = self } = this.props;
        window.onpopstate = this.handlePopState;
        window.history.replaceState({
            route: this.props.route
        }, this.props.route.title);

        // setInterval(() => {
        //     let { route } = this.props;
        //
        //     this.dispatch(NAVIGATE_TO_URL, route === 'Index' ? '/forms/' : '/');
        // }, 2000);
    }

    handlePopState(event) {
        this.dispatch(SET_ROUTE, event.state.route);
    }

    handleClick(event, domEvent, url) {
        const external = /s^(\w*:)?\/\//.test(url);

        if (url && !external) {
            domEvent.preventDefault();
            this.dispatch(NAVIGATE_TO_URL, url);
        }
    }

    render() {
        return jsx `<${PageLoader} page=${this.props.route.page} />`;
    }
}

Application.antibind = ['handlePopState', 'handleClick'];

const select = ({
    routes: {
        route
    }
}) => ({ route });

export default connect({
    select,
    merge: false
})(Application);
