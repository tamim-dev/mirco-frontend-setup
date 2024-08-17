import { Outlet, useNavigate } from 'react-router-dom';

import FullPageLoading from 'components/full-page-loading/FullPageLoading';
import { useSession } from 'hooks/UseSession';
import { SESSION_STATUS } from 'utils/constants/Global';

const AuthLayout = () => {
  const { session, status } = useSession();
  const navigate = useNavigate();

  // if (session) {
  //   TODO: It maybe the dayboard path
  //   navigate(routes.home.path);
  // }

  if (status === SESSION_STATUS.LOADING) {
    return <FullPageLoading />;
  }

  return <Outlet />;
};

export default AuthLayout;
