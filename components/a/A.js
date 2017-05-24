import { Component, jsx } from 'rerender';

export default class A extends Component {

    handleRef(ref) {
        this.ref = ref;
    }

    handleClick(event) {
        this.emit('link:clicked', event, this.ref.get('href'));
    }

    render() {
        return jsx `<a
            ref=${this.handleRef}
            onclick=${this.handleClick}
            ${this.props}
        >${this.children}</a>`;
    }
}
