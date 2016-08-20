import { Store, clientRender, html } from 'rerender';
import Application from '../components/application/Application.js';
import dehydrate from '../reducers/dehydrate';
import rehydrate from '../reducers/rehydrate';

class ClientApplication {
    constructor(state) {
        let store = new Store({
            state,
            dehydrate,
            rehydrate
        });

        clientRender(html `<instance of=${Application} />`, document.getElementById('application'), { store });
    }
}

new ClientApplication(window.__STATE__);
