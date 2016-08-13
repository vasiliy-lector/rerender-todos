import { Component, html } from 'rerender';

class Layout extends Component {
    render() {
        return html `<div className="layout">
            <div className="layout__header">
                ${this.props.headerText}
            </div>
            ${this.children}
        </div>`;
    }
}

Layout.singleton = true;

Layout.types = {
    headerText: 'string'
};

Layout.defaults = {
    headerText: 'Header text here'
};

export default Layout;
