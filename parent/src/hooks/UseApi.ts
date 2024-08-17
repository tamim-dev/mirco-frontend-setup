import { useState } from 'react';

import httpClient from 'services/BaseService';
import { RequestMethods } from 'utils/constants/Service';

const useApi = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);

  const makeRequest = async (
    method: RequestMethods,
    url: string,
    data: any = null,
  ) => {
    setLoading(true);

    try {
      const response = await httpClient[method](url, data);

      setLoading(false);
      setError(null);

      return {
        status: response.status,
        data: response.data,
      };
    } catch (error: any) {
      setLoading(false);
      setError(error);

      throw new Error(error.message);
    }
  };

  return { isLoading, error, makeRequest };
};

export default useApi;
