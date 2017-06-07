import { jsx } from 'rerender';
import StreamItem from './StreamItem';

export default function StreamItems() {
    const items = [];

    for (let i = 0; i < 5000; i++) {
        items.push(jsx `<${StreamItem} key=${'s' + i} />`);
    }

    return jsx `<div>
        ${items}
    </div>`;
}
