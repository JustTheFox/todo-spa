import React from 'react';
import cn from 'classnames';
import './form.scss';

const Form = ({ children, className, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={cn('form', className)}>
      {children}
    </form>
  );
};

export default Form;
