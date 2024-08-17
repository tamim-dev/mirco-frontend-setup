import { createContext, useContext } from 'react';

import useApi from 'hooks/UseApi';
import { ApiContextValues, ApiProviderProps } from 'models/ContextModels';

const defaultValues = {
  isLoading: false,
  error: null,
  makeRequest: () => null,
};

const ApiContext = createContext<ApiContextValues>(defaultValues);

export const useApiContext = () => useContext(ApiContext);

export const ApiProvider = ({ children }: ApiProviderProps) => {
  const apiInstance = useApi();

  return (
    <ApiContext.Provider value={apiInstance}>{children}</ApiContext.Provider>
  );
};
