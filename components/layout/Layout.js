import { jsx } from 'rerender';

function Layout({ title }, children){
    return jsx `<div className="layout">
        <div className="layout__container">
            <div className="layout__header">
                ${title}
            </div>
            <div className="content">
                ${children}
            </div>
        </div>
    </div>`;
}

Layout.types = {
    title: 'string'
};

Layout.defaults = {
    title: 'Title'
};

export default Layout;
