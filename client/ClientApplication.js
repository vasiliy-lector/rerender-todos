import { renderClient, jsx } from 'rerender';
import Application from '../components/application/Application.js';

class ClientApplication {
    constructor(initialRoute) {
        renderClient(jsx `<${Application} initialRoute=${initialRoute} />`);
    }
}

new ClientApplication(window.__INITIAL_ROUTE);
