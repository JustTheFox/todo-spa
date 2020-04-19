import React from 'react';
import './field.scss';

// eslint-disable-next-line import/prefer-default-export
export const Textarea = ({ onChange, ...props }) => {
  return (
    <div className="field">
      <textarea
        className="form-control field__input"
        cols={2}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
