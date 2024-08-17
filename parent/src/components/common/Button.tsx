import { FC } from 'react';

import { IButtonProps } from 'models/ButtonModels';
import 'styles/button.css';

const Button: FC<IButtonProps> = ({
  type = 'button',
  children = null,
  className = '',
  block = false,
  variant = 'primary',
  size = 'auto',
  onClick = () => {},
  ...restProps
}) => {
  const classNames = [
    'vs-btn',
    `vs-btn-${variant}`,
    `vs-btn-${size}`,
    block ? 'vs-btn-full' : '',
    className,
  ].join(' ');

  return (
    <button className={classNames} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
