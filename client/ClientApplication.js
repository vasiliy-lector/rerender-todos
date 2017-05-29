import { renderClient, jsx } from 'rerender';
import Application from '../components/application/Application.js';

class ClientApplication {
    constructor() {
        renderClient(jsx `<${Application} />`);
    }
}

new ClientApplication();
