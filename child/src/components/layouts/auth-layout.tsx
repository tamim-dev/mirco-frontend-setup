import { useNavigate, Outlet } from 'react-router-dom';
import { useSession } from '../../hooks/use-session';

import { routes } from '../../utils/constants/route-constants';
import { SESSION_STATUS } from '../../utils/constants/global-constants';
import FullPageLoading from '../full-page-loading/full-page-loading';

const AuthLayout = () => {
  const { session, status } = useSession();
  const navigate = useNavigate();

  if (session) {
    // TODO: It maybe the dayboard path
    navigate(routes.home.path);
  }

  if (status === SESSION_STATUS.LOADING) {
    return <FullPageLoading />;
  }

  return (
    <Outlet />
  );
};

export default AuthLayout;
