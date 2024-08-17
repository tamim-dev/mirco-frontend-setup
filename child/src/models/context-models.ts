import React from 'react';
import { RequestMethods } from 'utils/constants/service-constants';

interface CommonProviderProps {
  children?: React.ReactNode;
}

export interface ApiProviderProps extends CommonProviderProps { }

export interface ApiContextValues {
  isLoading: boolean;
  error: any;
  makeRequest: ((
    method: RequestMethods,
    url: string,
    data?: any
  ) => Promise<any>) | any;
}

export interface CustomHelmetProviderProps extends CommonProviderProps { }

export interface CustomHelmetContextValue {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}
