import { jsx } from 'rerender';

export default function StreamItem() {
    let i = 1000000;
    while(i > 0) {
        i--;
    }

    return jsx `<div style=${{
        backgroundColor: 'blue',
        height: '10px',
        width: '10px',
        float: 'left'
    }}></div>`;
}
