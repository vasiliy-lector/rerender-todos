import { jsx } from 'rerender';
// TODO: load on the fly
import * as pages from '../../pages/pages';

export default function PageLoader({ page, ...rest }, children) {
    const Page = pages[page];

    return jsx `<${Page} ${rest}>${children}</${Page}`;
}
