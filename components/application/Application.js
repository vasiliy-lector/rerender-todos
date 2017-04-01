import { Component, connect } from 'rerender';
import navigateUrl from '../../actions/navigateUrl';
import changeRoute from '../../reducers/routes/changeRoute';
import routes from '../../configs/routes';
import * as pages from '../../pages/pages';

class Application extends Component {
    componentDidMount() {
        window.onpopstate = this.handlePopState;
        history.replaceState({
            route: this.props.route
        }, '');

        // setInterval(() => {
        //     let { route } = this.props;
        //
        //     this.props.navigateUrl(route === 'Index' ? '/forms/' : '/');
        // }, 2000);
    }

    handlePopState(event) {
        this.props.changeRoute(event.state.route);
    }

    handleClick(event) {
        let currentNode = event.target;

        while(currentNode) {
            if (currentNode.tagName === 'A') {
                let url = currentNode.pathname,
                    external = currentNode.host !== location.host;

                if (url && (routes[url] || !external)) {
                    event.preventDefault();
                    this.props.navigateUrl(url);
                }

                break;
            } else {
                currentNode = currentNode.parentNode;
            }
        }
    }

    render({ props, jsx }) {
        let PageComponent = pages[props.route];

        return jsx `<div onClick=${this.handleClick}>
            <${PageComponent} />
        </div>`;
    }
}

Application.uniqid = 'app';
Application.antibind = ['handlePopState', 'handleClick'];

const get = ({ routes = {} }) => {
        return {
            route: routes.route
        };
    },
    watch = 'routes',
    actions = {
        navigateUrl,
        changeRoute
    };

export default connect({ actions, watch, get })(Application);
