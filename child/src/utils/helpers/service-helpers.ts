export const ensureTrailingSlash = (str: string) => {
  return str.endsWith('/') ? str : `${str}/`;
};

export const getBaseUrl = (): string => {
  let finalBaseUrl = '';
  const baseUrl = process.env.REACT_APP_API_BASE_URL;
  const apiVersion = process.env.REACT_APP_API_VERSION;

  if (baseUrl) {
    finalBaseUrl += ensureTrailingSlash(baseUrl);
  } else {
    return ensureTrailingSlash(finalBaseUrl);
  }

  if (apiVersion) {
    finalBaseUrl += ensureTrailingSlash(apiVersion);
  }

  return finalBaseUrl;
};

export const getTimeoutDuration = (): number => {
  const timeoutDuration = process.env.REACT_APP_TIMEOUT_DURATION;
  return parseInt(timeoutDuration || '10000');
};
