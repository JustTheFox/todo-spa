import React, { useEffect, useCallback } from 'react';
import { ModalPortal } from './modal-portal';
import './modal.scss';

export const Modal = ({ children, title, onClose }) => {
  const onCloseCallback = useCallback(() => onClose(), [onClose]);
  const onEscPressHandler = useCallback(
    (e) => {
      const { keyCode } = e;
      if (keyCode === 27) {
        onClose();
      }
      return;
    },
    [onCloseCallback],
  );

  useEffect(() => {
    document.addEventListener('keydown', onEscPressHandler);
    return () => document.removeEventListener('keydown', onEscPressHandler);
  }, [onEscPressHandler]);

  return (
    <ModalPortal>
      <div className="modal d-block">
        <div className="modal-overlay" onClick={onCloseCallback} />
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onCloseCallback}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};
