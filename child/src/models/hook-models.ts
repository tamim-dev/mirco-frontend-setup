import { SESSION_STATUS } from 'utils/constants/global-constants';

interface Session {
  user_id: number;
  first_name: string;
  last_name: string;
  user_roles: string[];
}

export interface UseSessionHook {
  session: Session | null;
  status: SESSION_STATUS;
}
