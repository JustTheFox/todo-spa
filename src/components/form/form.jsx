import React from 'react';
import './form.scss';

const Form = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="form">
      {children}
    </form>
  );
};

export default Form;
