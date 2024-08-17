import clsx from 'clsx';
import { FC } from 'react';

import { CloseIcon } from 'assets/icons';
import { IModalHeaderProps } from 'models/ModalModels';

const ModalHeader: FC<IModalHeaderProps> = ({
  onClose = () => {},
  closeButtonPosition = 'right',
  className = '',
  iconClassName = '',
  children,
}) => {
  return (
    <header
      className={clsx(
        'modal-header',
        closeButtonPosition === 'left' ? 'left' : '',
      )}
    >
      <span className={clsx('modal-header-content', className)}>
        {children}
      </span>

      <span className={clsx('modal-close', iconClassName)} onClick={onClose}>
        <CloseIcon className="h-5 w-5" />
      </span>
    </header>
  );
};

export default ModalHeader;
