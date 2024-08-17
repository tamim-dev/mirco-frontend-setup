import { FC, Suspense } from 'react';
import { Route, RouterProvider, Routes } from 'react-router-dom';

import { ApiProvider } from './contexts/api-context';
import { CustomHelmetProvider } from './contexts/custom-helmet-context';
import ReactQueryProvider from './providers/ReactQueryProvider';
import BaseLayout from './components/layouts/base-layout';
import HomePage from './features/home';
import NotFoundPage from './features/not-found';

const App: FC = () => {
  return (
    <CustomHelmetProvider>
      <ReactQueryProvider>
        <ApiProvider>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route index element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </ApiProvider>
      </ReactQueryProvider>
    </CustomHelmetProvider>
  );
};

export default App;
