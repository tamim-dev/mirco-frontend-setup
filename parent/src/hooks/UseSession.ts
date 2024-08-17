import { useEffect, useState } from 'react';

import { UseSessionHook } from 'models/HookModels';
import { SESSION_STATUS } from 'utils/constants/Global';
import { LOCAL_STORAGE_KEYS } from 'utils/constants/Storage';

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
