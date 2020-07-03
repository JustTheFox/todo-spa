import React, { useEffect, useCallback } from 'react';
import cn from 'classnames';
import { ModalPortal } from './modal-portal';
import { Title } from '../title';
import './modal.scss';

export const Modal = ({ children, title, onClose, size = 'medium' }) => {
  const onCloseCallback = useCallback(() => onClose(), [onClose]);
  const onEscPressHandler = useCallback(
    (e) => {
      const { keyCode } = e;
      if (keyCode === 27) {
        onCloseCallback();
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
      <div
        className={cn('modal', {
          'modal--small': size === 'small',
          'modal--medium': size === 'medium',
          'modal--large': size === 'large',
        })}
      >
        <div className="modal__content">
          <div className="modal__header">
            <Title tagName="h5" size="medium">
              {title}
            </Title>
            <button
              type="button"
              className="modal__close"
              aria-label="Close"
              onClick={onCloseCallback}
            >
              &times;
            </button>
          </div>
          <div className="modal__body">{children}</div>
        </div>
      </div>
    </ModalPortal>
  );
};
