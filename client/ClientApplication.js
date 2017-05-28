import { Store, renderClient, jsx } from 'rerender';
import Application from '../components/application/Application.js';
import dehydrate from '../selectors/dehydrate';
import rehydrate from '../selectors/rehydrate';

class ClientApplication {
    constructor(state) {
        let store = new Store({
            state,
            dehydrate,
            rehydrate
        });

        renderClient(jsx `<${Application} />`, { store });
    }
}

new ClientApplication(window.__STATE__);
