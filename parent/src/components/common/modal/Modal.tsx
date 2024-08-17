import clsx from 'clsx';
import { FC, MouseEvent, MutableRefObject, useRef } from 'react';

import { IModalProps } from 'models/ModalModels';
import 'styles/modal.css';

const Modal: FC<IModalProps> = ({
  className = 'w-1/2',
  disableOutsideClick = false,
  isOpen = false,
  onClose,
  children,
  animation = 'zoom',
}) => {
  const refModal = useRef<HTMLDivElement | null>(
    null,
  ) as MutableRefObject<HTMLDivElement>;

  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!isOpen || disableOutsideClick) return;
    if (refModal?.current.contains(event.target as Node)) {
      return;
    }
    onClose();
  };

  return (
    <div
      className={clsx('modal', isOpen ? 'modal-visible' : 'modal-hidden')}
      onClick={handleModalClick}
    >
      <div
        className={clsx(`modal-content modal-animate-${animation}`, className)}
        ref={refModal}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
