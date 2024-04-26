import {withLayout} from '@/layout';
import {Page404} from '@/page-components/404';

function NotFound(): JSX.Element {
  return (
    <Page404/>
  );
}

export default withLayout(NotFound);