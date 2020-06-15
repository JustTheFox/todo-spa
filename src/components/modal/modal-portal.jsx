import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export const ModalPortal = ({ children }) => {
  const [node] = useState(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(node);
    return () => {
      document.body.removeChild(node);
    };
  });

  return ReactDOM.createPortal(children || null, node);
};
