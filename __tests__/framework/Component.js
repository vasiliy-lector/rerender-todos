import { Component, serverRender, html } from 'rerender';

class Block extends Component {
    render() {
        return html `<div className="block">Text of block</div>`;
    }
}

describe('serverRender', () => {

    it('should return expected string', () => {
        expect(serverRender(html `<instance of=${Block} />`, { omitIds: true })).toEqual('<div class="block">Text of block</div>');
    });

});
