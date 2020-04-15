import React from 'react';

const Form = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="">
      {children}
    </form>
  );
};

export default Form;
