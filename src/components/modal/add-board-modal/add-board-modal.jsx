import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchColorsAction } from '../../../store/actions/colors';
import { Modal } from '../modal';
import { Input, ColorField } from '../../fields';
import { Button } from '../../button';

export const AddBoardModal = ({
  initialState = {},
  onOk,
  onClose,
  ...props
}) => {
  const [value, setValue] = useState(initialState?.title || '');
  const [color, setColor] = useState(initialState?.colorId || 1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchColorsAction());
  }, []);

  const colors = useSelector((store) => store.colors.items);

  const handleChange = ({ target }) => setValue(target.value);
  const handleClose = () => {
    setValue('');
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) return;

    onOk({
      ...initialState,
      title: value,
      colorId: color,
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
        <ColorField items={colors} active={color} onChange={setColor} />
        <Button disabled={!value || !color}>Submit</Button>
        <Button type="button" onClick={handleClose}>
          Cansel
        </Button>
      </form>
    </Modal>
  );
};
