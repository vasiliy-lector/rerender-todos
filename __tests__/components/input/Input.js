import Input from '../../../components/input/Input';
import { renderToString, html } from 'jsunit';

describe('Input', () => {
    it('should return expected string', () => {
        expect(renderToString(html `<unit Class=${Input} placeholder="Input text here" value="" />`))
            .toEqual('<input placeholder="Input text here"></input>');
    });
});
