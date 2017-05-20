import express from 'express';
import { Store, Dispatcher, renderServer, jsx } from 'rerender';
import defaults from 'lodash/defaults';
import find from 'lodash/find';
import debug from 'debug';
import routes from '../configs/routes';
import staticConfig from '../configs/static';
import env from '../configs/env';
import Application from '../components/application/Application';
import GET_ROUTES from '../events/GET_ROUTES';
import CHANGE_ROUTE from '../events/CHANGE_ROUTE';

defaults(process.env, env);
debug.enable(process.env.DEBUG);

var logInfo = debug('framework:info:ServerApplication'),
    logError = debug('framework:error:ServerApplication'),
    staticRoot = process.env.STATIC_ROOT,
    rootDir = __dirname.split('/').slice(0, -1).join('/'),
    ERROR_404 = 'Error404';

class ServerApplication {
    constructor() {
        this.initServer();
    }

    initServer() {
        var server = express();

        server.get(staticRoot + '/*', this.staticRequestHandler.bind(this));
        server.get('/*', this.requestHandler.bind(this));

        server.listen(process.env.PORT);
        logInfo('Server listen port', process.env.PORT);
    }

    requestHandler(request, response) {
        logInfo('Request path', request.path);

        try {
            const store = new Store();
            const dispatcher = new Dispatcher({ store });
            const route = this.getRoute(request.path) || ERROR_404;
            dispatcher.setServer();

            dispatcher.dispatch(GET_ROUTES)
                .then(CHANGE_ROUTE, this.getRoute(request.path))
                .then(() => {
                    logInfo('route', route);

                    if (route === ERROR_404) {
                        response.status(404);
                    }

                    response.send(this.getHtml(store, dispatcher));
                });

        } catch (error) {
            this.send500({ error, response });
        }
    }

    send500({ error, response }) {
        logError(error);
        response.status(500);
        response.send(`<h1>Error 500</h1>
            <p>${process.env.NODE_ENV === 'development' ? error + '' : 'Internal server error'}</p>`);
    }

    getHtml(store, dispatcher) {
        logInfo('began render');

        return renderServer(jsx `<${Application} />`, {
            store,
            dispatcher,
            title: this.getTitle(),
            head: this.getCss(),
            bodyEnd: this.getScripts()
        });
    }

    getTitle() {
        return 'Todos';
    }

    getCss() {
        return ['/components/application/application.less'].map(path => {
            return `<link rel="stylesheet/less" type="text/css" href="${staticRoot}${path}"/>`;
        });
    }

    getScripts() {
        let scripts = [
            // '/node_modules/less/dist/less.js',
            '/dist/ClientApplication.js'
        ].map(path => `<script src="${staticRoot}${path}"></script>`);

        return scripts.join('');
    }

    getRoute(path) {
        return routes[path];
    }

    staticRequestHandler(request, response) {
        var path = request.path.replace(staticRoot, '');

        if (find(staticConfig.enabledPatterns, pattern => pattern.test(path))) {
            logInfo('Request static path', path);
            response.sendFile(rootDir + path);
        } else {
            logInfo('Access to static file not allowed at configs (see config/static.js)', path);
            response.sendStatus(403);
        }
    }
}

new ServerApplication();

export default ServerApplication;
