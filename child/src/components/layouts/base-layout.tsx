import { Fragment, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useSession } from '../../hooks/use-session';
import useAuthServices from '../../services/auth-services';

import { routes } from '../../utils/constants/route-constants';
import { SESSION_STATUS } from '../../utils/constants/global-constants';
import FullPageLoading from '../full-page-loading/full-page-loading';
import FullPageBlurLoading from '../full-page-loading/full-page-blur-loading';

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
