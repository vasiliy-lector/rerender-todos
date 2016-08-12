import { Component, renderToString, html } from 'jsunit';

class Block extends Component {
    render() {
        return html `<div class="block">Text of block</div>`;
    }
}

describe('renderToString', () => {

    it('should return expected string', () => {
        expect(renderToString(html `<unit Class=${Block} />`)).toEqual('<div class="block">Text of block</div>');
    });

});
