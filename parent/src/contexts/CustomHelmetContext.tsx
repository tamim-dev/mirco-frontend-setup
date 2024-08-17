import { createContext, useContext, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import {
  CustomHelmetContextValue,
  CustomHelmetProviderProps,
} from 'models/ContextModels';
import { APPLICATION_NAME } from 'utils/constants/Global';

const defaultValues = {
  setTitle: () => null,
};

const CustomHelmetContext =
  createContext<CustomHelmetContextValue>(defaultValues);

export const useHelmetContext = () => useContext(CustomHelmetContext);

export const CustomHelmetProvider = ({
  children,
}: CustomHelmetProviderProps) => {
  const [title, setTitle] = useState<string>(APPLICATION_NAME);

  return (
    <CustomHelmetContext.Provider value={{ setTitle }}>
      <HelmetProvider>
        <Helmet>
          <title> {title} </title>
        </Helmet>
        {children}
      </HelmetProvider>
    </CustomHelmetContext.Provider>
  );
};
