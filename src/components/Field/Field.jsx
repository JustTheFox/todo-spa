import React from 'react';
import './field.scss';

const Field = ({ onChange, ...props }) => {
  return (
    <div className="field">
      <input className="field__input" onChange={onChange} {...props} />
    </div>
  );
};

export default Field;
