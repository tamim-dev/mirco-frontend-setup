import { FC, Suspense } from 'react';

import FullPageLoading from 'components/full-page-loading/FullPageLoading';
import { ApiProvider } from 'contexts/ApiContext';
import { CustomHelmetProvider } from 'contexts/CustomHelmetContext';
import ReactQueryProvider from 'providers/ReactQueryProvider';
import AppRouter from 'routes/AppRouter';

const App: FC = () => {
  return (
    <CustomHelmetProvider>
      <ReactQueryProvider>
        <ApiProvider>
          <Suspense fallback={<FullPageLoading />}>
            <AppRouter />
          </Suspense>
        </ApiProvider>
      </ReactQueryProvider>
    </CustomHelmetProvider>
  );
};

export default App;
