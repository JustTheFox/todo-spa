import React, { memo } from 'react';

const Button = ({ type = 'submit', children, onClick }) => {
  return (
    <button type={type} onClick={onClick} className="btn btn-primary">
      {children}
    </button>
  );
};

export default memo(Button);
