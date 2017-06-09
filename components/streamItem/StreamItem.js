import { jsx, Component } from 'rerender';
import LONG_ACTION from '../../events/stream/LONG_ACTION';

export default class StreamItem extends Component {
    init() {
        this.dispatch(LONG_ACTION);
    }

    render() {
        return jsx `<div style=${{
            backgroundColor: 'blue',
            height: '10px',
            width: '10px',
            float: 'left'
        }}></div>`;
    }
}
