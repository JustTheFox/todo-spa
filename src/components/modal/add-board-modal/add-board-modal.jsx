import React, { useState } from 'react';
import { Modal } from '../modal';
import { Input } from '../../field';
import { Button } from '../../button';

export const AddBoardModal = ({ onOk, onClose, ...props }) => {
  const [value, setValue] = useState('');
  const handleChange = ({ target }) => setValue(target.value);
  const handleClose = () => {
    setValue('');
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) return;

    onOk({
      title: value,
      colorId: 1,
      timestamp: Date.now(),
    });
    handleClose();
  };

  return (
    <Modal title="Add board" onClose={onClose} {...props}>
      <form onSubmit={handleSubmit}>
        <Input
          className="mb-3"
          type="text"
          value={value}
          onChange={handleChange}
        />
        <Button className="mr-2" disabled={!value}>
          Create
        </Button>
        <Button type="button" onClick={handleClose}>
          Cansel
        </Button>
      </form>
    </Modal>
  );
};
