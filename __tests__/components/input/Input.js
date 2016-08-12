import Input from '../../../components/input/Input';
import { renderToString, html } from 'rerender';

describe('Input', () => {
    it('should return expected string', () => {
        expect(renderToString(html `<instance of=${Input} placeholder="Input text here" value="" />`))
            .toEqual('<input placeholder="Input text here"></input>');
    });
});
