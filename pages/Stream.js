import { jsx } from 'rerender';
import StreamItem from '../components/streamItem/StreamItem';

function Stream(){
    const items = [];

    for (let i = 0; i < 5000; i++) {
        items.push(jsx `<${StreamItem} key=${'s' + i} />`);
    }

    return jsx `<div>
        <div style=${{ backgroundColor: 'pink', height: '200px' }} />
        <div>
            ${items}
        </div>
    </div>`;
}

export default Stream;
