export enum RequestMethods {
  GET = 'get',
  PUT = 'put',
  POST = 'post',
  PATCH = 'patch',
  DELETE = 'delete'
}

export const STATUS_CODES = {
  NOT_FOUND: 404,
};

export const API_END_POINTS = {
  SUCCESS_TEST: 'users',  //TODO: Resolve it
  ERROR_TEST: 'say-hello',  //TODO: Resolve it
  LOGOUT: 'auth/logout',
  LOGIN: 'auth/login',
  SIGNUP: 'auth/signup',
  TOKEN: 'auth/token',
  RE_TOKEN: 'auth/re-token',
};
