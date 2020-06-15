import React, { useEffect, useCallback } from 'react';
import { ModalPortal } from './modal-portal';
import './modal.scss';

export const Modal = ({ show, children, title, onClose }) => {
  const onEscPressHandler = useCallback(
    (e) => {
      const { keyCode } = e;
      if (keyCode === 27) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    document.addEventListener('keydown', onEscPressHandler);
    return () => document.removeEventListener('keydown', onEscPressHandler);
  }, [onEscPressHandler]);

  return (
    <ModalPortal>
      <div className="modal d-block">
        <div className="modal-overlay" onClick={onClose} />
        <div className="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{title}</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};
