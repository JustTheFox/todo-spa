import React from 'react';
import cn from 'classnames';
import './field.scss';

export const Input = ({ className, onChange, ...props }) => {
  return (
    <div className="field">
      <input
        className={cn('form-control', 'field__input', className)}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
