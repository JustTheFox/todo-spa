import React from 'react';

const Icon = ({ width, height, viewBox, children, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 24}
    height={height || 24}
    viewBox={viewBox || '0 0 24 24'}
    children={children}
    {...props}
  />
);

export default Icon;
