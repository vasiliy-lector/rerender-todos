import { Component, jsx } from 'rerender';

class A extends Component {

    handleRef(ref) {
        this.ref = ref;
    }

    handleClick(event) {
        this.trigger('a:clicked', {
            domEvent: event,
            url: this.ref.get('href')
        });
    }

    render() {
        return jsx `<a
            ref=${this.handleRef}
            onclick=${this.handleClick}
            ${this.props}
        >${this.children}</a>`;
    }
}

A.antibind = ['handleClick', 'handleRef'];

export default A;
