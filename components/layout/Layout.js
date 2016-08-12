import { Component, html } from 'jsunit';

class Layout extends Component {
    render() {
        return html `<div class="layout">
            <div class="layout__header">
                ${this.props.headerText}
            </div>
            ${this.props.children}
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
