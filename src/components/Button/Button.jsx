import React, { memo } from 'react';
import cn from 'classnames';

const Button = ({
  type = 'submit',
  children,
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn('btn', 'btn-primary', className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(Button);
