import Head from '../components/head';
import BaseLayout from '../components/layouts/base-layout';
import HomePage from '../features/home';
import NotFoundPage from '../features/not-found';
import { routes } from '../utils/constants/route-constants';

const Routes = [
  {
    element: <BaseLayout />,
    children: [
      {
        path: routes.home.path,
        element: (
          <Head title={routes.home.title}>
            <HomePage />
          </Head>
        ),
      },
      {
        path: routes.notFound.path,
        element: (
          <Head title={routes.notFound.title}>
            <NotFoundPage />
          </Head>
        ),
      },
    ],
  },
];

export default Routes;
