import { FC, lazy, Suspense } from 'react';

const MicroFrontendOneLazy = lazy(() => import('mfe/app'));

export const MicroFrontendOnePage: FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MicroFrontendOneLazy />
    </Suspense>
  );
};
