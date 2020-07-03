import React from 'react';
import cn from 'classnames';
import './text-field.scss';

export const Input = ({ className, onChange, error, ...props }) => {
  return (
    <div className={cn('text-field', className)}>
      <input
        className="text-field__input form-control"
        onChange={onChange}
        {...props}
      />
      {error && <span className="text-field__error">{error}</span>}
    </div>
  );
};
