import navigateToUrl from '../../actions/routes/navigateToUrl';
import changeRoute from '../../reducers/routes/changeRoute';

export default {
    name: 'NAVIGATE_TO_URL',
    serverDisabled: true,
    action: navigateToUrl,
    reducers: [ changeRoute ]
};
