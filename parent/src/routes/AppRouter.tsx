import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BaseLayout from 'components/layouts/BaseLayout';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import { MicroFrontendOnePage } from 'features/auth/mfe1/MFE-page';
import HomePage from 'features/home';
import NotFoundPage from 'features/not-found';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex w-[99.5%] justify-between pt-20">
        <Sidebar />

        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path={'/home'} element={<HomePage />} />
            <Route path="child/*" element={<MicroFrontendOnePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          {/* <Route path="/" element={<AuthLayout />}>
            <Route
              path={routes.login.path}
              element={
                <Head title={routes.login.title}>
                  <LoginPage />
                </Head>
              }
            />
            <Route
              path={routes.login.path}
              element={
                <Head title={routes.signup.title}>
                  <SignupPage />
                </Head>
              }
            />

            <Route path="*" element={<NotFoundPage />} />
          </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
