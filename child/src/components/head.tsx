import { FC, Fragment, useEffect } from 'react';
import { useHelmetContext } from '../contexts/custom-helmet-context';

interface HeadProps {
  title: string,
  children: React.ReactNode,
}

const Head: FC<HeadProps> = (props: HeadProps) => {
  const { setTitle } = useHelmetContext();

  useEffect(() => {
    setTitle(props.title);
  }, [props.title]);

  return (
    <Fragment>
      {props.children}
    </Fragment>
  );
};

export default Head;
