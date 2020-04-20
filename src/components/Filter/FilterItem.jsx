import React, { useCallback } from 'react';
import cn from 'classnames';
import { filterTaskAction } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const FilterItem = ({ children, filter, className }) => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((store) => store.filter);
  const filterTask = useCallback(() => {
    dispatch(filterTaskAction(filter));
  }, [dispatch, filter]);

  return (
    <li className={cn('nav-item', className)}>
      <button
        type="button"
        className={cn('nav-link', {
          active: currentFilter === filter,
        })}
        onClick={filterTask}
      >
        {children}
      </button>
    </li>
  );
};

export default FilterItem;
