import React from 'react';
import './field.scss';

// eslint-disable-next-line import/prefer-default-export
export const Input = ({ onChange, ...props }) => {
  return (
    <div className="field">
      <input
        className="form-control field__input"
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
