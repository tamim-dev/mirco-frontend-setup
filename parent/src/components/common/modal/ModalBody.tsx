import clsx from 'clsx';
import { FC } from 'react';

import { IModalBodyProps } from 'models/ModalModels';

const ModalBody: FC<IModalBodyProps> = ({ className = '', children }) => {
  return <div className={clsx('modal-body', className)}>{children}</div>;
};

export default ModalBody;
