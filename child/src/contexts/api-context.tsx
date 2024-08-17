import { createContext, useContext } from 'react';

import useApi from '../hooks/use-api';
import { ApiContextValues, ApiProviderProps } from 'models/context-models';

const defaultValues = {
  isLoading: false,
  error: null,
  makeRequest: () => null
};

const ApiContext = createContext<ApiContextValues>(defaultValues);

export const useApiContext = () => useContext(ApiContext);

export const ApiProvider = ({ children }: ApiProviderProps) => {
  const apiInstance = useApi();

  return (
    <ApiContext.Provider value={apiInstance}>
      {children}
    </ApiContext.Provider>
  );
};
