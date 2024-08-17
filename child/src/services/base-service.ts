import axios from 'axios';
import { getBaseUrl, getTimeoutDuration } from '../utils/helpers/service-helpers';

/**
 *? Here the httpClient is our main request instance,
 *? we will use it to call methods with authorization
 *? and handle global request mechanism throw request interceptors
 *
 *? NOTE: Modify this httpClient based on your project requirements (if needed)
 */
const httpClient = axios.create({
  baseURL: getBaseUrl(),
  timeout: getTimeoutDuration(),
  headers: {
    'Content-Type': 'application/json',
  },
});

httpClient.interceptors.request.use(
  (config) => {
    // You can add headers, authentication tokens, etc. here
    // For example: config.headers['Authorization'] = 'Bearer ' + authToken;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle responses or errors after a request is made
httpClient.interceptors.response.use(
  (response) => {
    return response; // Return the response data
  },
  (error) => {
    // Handle error responses (status code >= 400)
    return Promise.reject(error);
  }
);

export default httpClient;

/**
 *? Here we are using generalClient to make api
 *? request without any other pre-post-setup
 */
export const generalClient = axios.create({
  baseURL: getBaseUrl(),
  timeout: getTimeoutDuration(),
  headers: {
    'Content-Type': 'application/json',
  },
});
