import Button from '../../../components/button/Button';
import { serverRender, html } from 'rerender';

describe('Button', () => {
    it('should return expected string', () => {
        let json = html `<instance of=${Button}>${'1 + 2 = '}${1 + 2}</instance>`;

        expect(serverRender(json, { omitIds: true })).toEqual('<button>1 + 2 = 3</button>');
    });
});
