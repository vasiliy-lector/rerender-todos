import Button from '../../../components/button/Button';
import { renderToString, html } from 'rerender';

describe('Button', () => {
    it('should return expected string', () => {
        let json = html `<instance of=${Button} text="Button">${'1 + 2 = '}${1 + 2}</instance>`;

        expect(renderToString(json)).toEqual('<button>Button1 + 2 = 3</button>');
    });
});
