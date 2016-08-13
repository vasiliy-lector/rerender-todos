import { Store, attach, html } from 'rerender';
import Application from '../components/application/Application.js';
import Todos from '../reducers/Todos';
import Routes from '../reducers/Routes';

class ClientApplication {
    constructor(state) {
        let store = new Store({
            reducers: [Todos, Routes],
            state
        });

        attach(html `<instance of=${Application} />`, document.getElementById('application'), { store });
    }
}

new ClientApplication(window.__STATE__);
