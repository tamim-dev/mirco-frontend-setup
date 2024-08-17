import { useApiContext } from '../contexts/api-context';
import { API_END_POINTS, RequestMethods } from '../utils/constants/service-constants';

const useHomeServices = () => {
  const ApiService = useApiContext();

  const testApiSuccess = (): Promise<any> => {
    return ApiService.makeRequest(RequestMethods.GET, API_END_POINTS.SUCCESS_TEST);
  };

  const testApiError = (): Promise<any> => {
    return ApiService.makeRequest(RequestMethods.GET, API_END_POINTS.ERROR_TEST);
  };

  return ({
    testApiSuccess,
    testApiError
  });
};

export default useHomeServices;
