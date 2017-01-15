function Layout({ props: { title }, children, jsx }){
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

Layout.defaults = {
    title: 'Title'
};

export default Layout;
