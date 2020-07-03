import { createPortal } from 'react-dom';

export const ModalPortal = ({ children }) =>
  createPortal(children || null, document.body);
