import { useEffect, useState } from 'react';
import { UseSessionHook } from '../models/hook-models';
import { SESSION_STATUS } from '../utils/constants/global-constants';
import { LOCAL_STORAGE_KEYS } from '../utils/constants/storage-constants';

export const useSession = () => {
  const [session, setSession] = useState<UseSessionHook>({
    session: null,
    status: SESSION_STATUS.LOADING,
  });

  useEffect(() => {
    const existingSession = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH_TOKEN);

    if (existingSession) {
      setSession({
        session: JSON.parse(existingSession),
        status: SESSION_STATUS.AUTHENTICATED,
      });
    } else {
      setSession({
        session: null,
        status: SESSION_STATUS.UNAUTHENTICATED,
      });
    }
  }, []);

  return session;
};
