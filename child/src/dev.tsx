import React, { Suspense } from 'react';

import { ApiProvider } from './contexts/api-context';
import { CustomHelmetProvider } from './contexts/custom-helmet-context';
import MainRoutes from './routes/base-routes';
import FullPageLoading from './components/full-page-loading/full-page-loading';
import ReactQueryProvider from './providers/ReactQueryProvider';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';

const Dev = () => {
  return (
    <Suspense fallback={<FullPageLoading />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  );
};

export default Dev;
