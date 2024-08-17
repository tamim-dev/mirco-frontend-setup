import { Fragment, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import FullPageBlurLoading from 'components/full-page-loading/FullPageBlurLoading';
import { useSession } from 'hooks/UseSession';
import useAuthServices from 'services/AuthServices';
import { routes } from 'utils/constants/Route';

const BaseLayout = () => {
  const navigate = useNavigate();
  const AuthServices = useAuthServices();
  const { session, status } = useSession();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // if (!session && !(status === SESSION_STATUS.LOADING)) {
  //   if (!location.pathname.includes('/auth')) {
  //     navigate(routes.login.path);
  //   }
  // }

  // if (!session || status === SESSION_STATUS.LOADING) {
  //   return <FullPageLoading />;
  // }

  const handleLogout = () => {
    setIsLoading(true);
    AuthServices.logout()
      .then(() => {
        localStorage.clear();
        sessionStorage.clear();
        navigate(routes.login.path);
      })
      .catch((err: any) => console.log(err?.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <Fragment>
      {isLoading && <FullPageBlurLoading />}
      <Outlet />
    </Fragment>
  );
};

export default BaseLayout;
