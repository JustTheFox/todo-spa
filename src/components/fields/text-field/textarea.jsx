import React from 'react';
import './text-field.scss';

export const Textarea = ({ onChange, ...props }) => {
  return (
    <div className="text-field">
      <textarea
        className="form-control text-field__input"
        cols={2}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};
