import { useApiContext } from 'contexts/ApiContext';
import { API_END_POINTS, RequestMethods } from 'utils/constants/Service';

const useAuthServices = () => {
  const ApiService = useApiContext();

  const signup = (userInfo: any): Promise<any> => {
    return ApiService.makeRequest(
      RequestMethods.POST,
      API_END_POINTS.SIGNUP,
      userInfo,
    );
  };

  const login = (credentials: any): Promise<any> => {
    return ApiService.makeRequest(
      RequestMethods.POST,
      API_END_POINTS.LOGIN,
      credentials,
    );
  };

  const logout = (): Promise<any> => {
    return ApiService.makeRequest(
      RequestMethods.DELETE,
      API_END_POINTS.ERROR_TEST,
    );
  };

  //TODO: This a dummy service, you need to remove this
  const fakeLogin = (credentials: any): Promise<any> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          JSON.stringify({
            auth_token: 'hijibiji_auth_token:tomar_token_tumi_banaow',
          }),
        );
      }, 3000);
    });
  };

  return {
    signup,
    login,
    logout,
    fakeLogin, //TODO: This a dummy service, you need to remove this
  };
};

export default useAuthServices;
