import { Component, html } from 'rerender';

class Layout extends Component {
    render() {
        return html `<div className="layout">
            <div className="layout__container">
                <div className="layout__header">
                    ${this.props.title}
                </div>
                <div className="content">
                    ${this.children}
                </div>
            </div>
        </div>`;
    }
}

Layout.types = {
    title: 'string'
};

Layout.defaults = {
    title: 'Title'
};

Layout.singleton = true;

export default Layout;
