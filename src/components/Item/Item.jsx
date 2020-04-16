import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import {
  deleteTaskAction,
  likeTaskAction,
  putOffTaskAction,
  toggleTaskAction,
} from '../../store/actions';
import './item.scss';

const Item = ({
  id,
  index,
  title,
  description,
  completed,
  postponed,
  liked,
}) => {
  const dispatch = useDispatch();

  const onDelete = useCallback(() => {
    dispatch(deleteTaskAction(id));
  }, [dispatch, id]);
  const onToggle = useCallback(() => {
    dispatch(toggleTaskAction(id));
  }, [dispatch, id]);
  const onPutOff = useCallback(() => {
    dispatch(putOffTaskAction(id));
  }, [dispatch, id]);
  const onLike = useCallback(() => {
    dispatch(likeTaskAction(id));
  }, [dispatch, id]);

  return (
    <li className="item">
      {index && <span>{index}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {completed && <p>completed</p>}
      {postponed && <p>postponed</p>}
      {liked && <p>liked</p>}
      <Button type="button" className="mr-2" onClick={onDelete}>
        Delete
      </Button>
      <Button type="button" className="mr-2" onClick={onToggle}>
        Complete
      </Button>
      <Button type="button" className="mr-2" onClick={onPutOff}>
        Put off
      </Button>
      <Button type="button" className="mr-2" onClick={onLike}>
        Like
      </Button>
    </li>
  );
};

export default Item;
