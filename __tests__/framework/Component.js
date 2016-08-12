import { Component, renderToString, html } from 'rerender';

class Block extends Component {
    render() {
        return html `<div class="block">Text of block</div>`;
    }
}

describe('renderToString', () => {

    it('should return expected string', () => {
        expect(renderToString(html `<instance of=${Block} />`)).toEqual('<div class="block">Text of block</div>');
    });

});
