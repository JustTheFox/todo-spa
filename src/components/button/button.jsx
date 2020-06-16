import React, { memo } from 'react';
import cn from 'classnames';
import './button.scss';

const ButtonComponent = ({
  type = 'submit',
  children,
  onClick,
  theme = 'primary',
  block,
  icon,
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'btn',
        {
          'btn-primary': theme === 'primary',
          'btn-secondary': theme === 'secondary',
          'btn-success': theme === 'success',
          'btn-danger': theme === 'danger',
          'btn-outline-light': theme === 'light',
          'btn-outline-dark': theme === 'dark',
          'btn-block': block,
          'btn-icon': icon,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const Button = memo(ButtonComponent);
