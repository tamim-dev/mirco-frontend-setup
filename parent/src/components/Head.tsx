import { FC, Fragment, useEffect } from 'react';

import { useHelmetContext } from 'contexts/CustomHelmetContext';
import { IHeadProps } from 'models/LayoutModels';

const Head: FC<IHeadProps> = ({ title, children }) => {
  const { setTitle } = useHelmetContext();

  useEffect(() => {
    setTitle(title);
  }, [title]);

  return <Fragment>{children}</Fragment>;
};

export default Head;
