import { jsx } from 'rerender';
import StreamItem from '../components/streamItem/StreamItem';

function StreamItems() {
    const items = [];

    for (let i = 0; i < 1000; i++) {
        items.push(jsx `<${StreamItem} key=${'s' + i} index=${i} />`);
    }

    return jsx `<div>
        ${items}
    </div>`;
}

function Stream(){
    return jsx `<div>
        <div style=${{ backgroundColor: 'pink', height: '200px' }} />
        <${StreamItems} />
    </div>`;
}

export default Stream;
