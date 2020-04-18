import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import cn from 'classnames';
import Button from '../Button/Button';
import {
  deleteTaskAction,
  likeTaskAction,
  putOffTaskAction,
  toggleTaskAction,
} from '../../store/actions';
import { parseDate } from '../../services/utils';
import './item.scss';

const Item = ({
  id,
  index,
  title,
  description,
  timestamp,
  done,
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

  const { date, time } = parseDate(timestamp);

  return (
    <li className="item">
      {/*{index && <span>{index}</span>}*/}
      <h2
        className={cn('item__title', {
          'item__title--done': done,
        })}
      >
        {title}
      </h2>
      {date && time && <span className="item__date">{`${date} ${time}`}</span>}

      {description && <p className="item__description">{description}</p>}
      {postponed && <p>postponed</p>}
      {liked && <p>liked</p>}
      <Button type="button" className="mr-2" onClick={onDelete}>
        Delete
      </Button>
      <Button type="button" className="mr-2" onClick={onToggle}>
        Done
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
