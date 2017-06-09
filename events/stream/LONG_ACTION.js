export default {
    name: 'LONG_ACTION',
    action() {
        return new Promise(resolve => setTimeout(resolve, 100));
    }
};
