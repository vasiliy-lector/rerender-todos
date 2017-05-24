import { Component, connect, jsx } from 'rerender';
import * as pages from '../../pages/pages';
import SET_ROUTE from '../../events/SET_ROUTE';
import NAVIGATE_TO_URL from '../../events/NAVIGATE_TO_URL';

class Application extends Component {
    init() {
        this.on('link:clicked', this.handleClick);
    }

    componentDidMount() {
        window.onpopstate = this.handlePopState;
        history.replaceState({
            route: this.props.route
        }, '');

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
        const PageComponent = pages[this.props.route.page];

        return jsx `<${PageComponent} />`;
    }
}

Application.antibind = ['handlePopState', 'handleClick'];

const select = ({ routes: { route } }) => ({ route });
const init = function() {
    this.dispatch(SET_ROUTE, this.props.initialRoute);
};

export default connect({
    init,
    select,
    merge: false
})(Application);
