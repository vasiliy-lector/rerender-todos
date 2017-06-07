import { jsx } from 'rerender';
import StreamItems from '../components/streamItems/StreamItems';

function Stream(){
    return jsx `<div>
        <div style=${{ backgroundColor: 'pink', height: '200px' }} />
        <${StreamItems} />
    </div>`;
}

export default Stream;
