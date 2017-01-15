import { Store, renderClient } from 'rerender';
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

        renderClient(({ jsx }) => jsx `<${Application} />`, store, document.getElementById('application'));
    }
}

new ClientApplication(window.__STATE__);
