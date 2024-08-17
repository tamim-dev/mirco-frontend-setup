export const APPLICATION_NAME: string = 'React App';

export const INIT_PAGE_ITEMS_LIMIT: number = 10;

export enum SESSION_STATUS {
  LOADING = 'loading',
  AUTHENTICATED = 'authenticated',
  UNAUTHENTICATED = 'unauthenticated',
}

export const VALID_EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
