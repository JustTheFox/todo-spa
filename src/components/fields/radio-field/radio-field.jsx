import React from 'react';
import cn from 'classnames';
import './text-field.scss';

export const RadioButton = ({ className, onChange, error, ...props }) => {
  return (
    <div className={cn('radio-field', className)}>
      <input
        type="radio"
        className="radio-field__input form-control"
        onChange={onChange}
        {...props}
      />
      {error && <span className="radio-field__error">{error}</span>}
    </div>
  );
};
