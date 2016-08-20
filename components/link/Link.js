import { Component, connect, html } from 'rerender';
import changeRoute from '../../actions/changeRoute';

class Link extends Component {
    handleClick(event) {
        let { href, changeRoute } = this.props;

        changeRoute(href);
        event.preventDefault();
    }

    render() {
        let { href } = this.props;

        return html `<a href=${href}
            onClick=${this.handleClick}>
            ${this.children}
        </a>`;
    }
}

Link.types = {
    href: 'string',
    changeRoute: 'function'
};

Link.autoBind = ['handleClick'];

const get = ({
        routes: {
            route
        }
    }) => ({
        route
    }),
    watch = 'routes',
    actions = {
        changeRoute
    };

export default connect({ actions, get, watch })(Link);
