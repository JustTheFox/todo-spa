import React from 'react';
import cn from 'classnames';
import './field.scss';

export const Input = ({ className, onChange, error, ...props }) => {
  return (
    <div className={cn('field', className)}>
      <input
        className="field__input form-control"
        onChange={onChange}
        {...props}
      />
      {error && <span className="field__error">{error}</span>}
    </div>
  );
};
