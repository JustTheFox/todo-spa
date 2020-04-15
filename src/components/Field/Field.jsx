import React from 'react';

const Field = ({ onChange, ...props }) => {
  return (
    <div className="">
      <input onChange={onChange} {...props} />
    </div>
  );
};

export default Field;
