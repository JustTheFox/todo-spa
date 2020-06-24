import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../../field';
import { Button } from '../../button';
import {
  createListAction,
  // editListAction,
} from '../../../store/actions/lists';
import './card-list.scss';

export const CardList = ({ boardId, children }) => {
  const [showForm, setShowForm] = useState(false);
  const [newList, setNewList] = useState('');
  const dispatch = useDispatch();
  const createList = useCallback(
    (item) => {
      dispatch(createListAction(item));
    },
    [dispatch],
  );

  const handleOpenForm = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);
  const handleCanselCreate = () => {
    handleCloseForm();
    setNewList('');
  };

  const handleInput = ({ target }) => setNewList(target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newList.trim()) return;

    createList({
      title: newList,
      boardId,
    });
    handleCanselCreate();
  };

  return (
    <>
      <div className="card-list">
        <>{children}</>
        <div className="card-list__create">
          {!showForm && (
            <Button className="card-list__create-btn" onClick={handleOpenForm}>
              Create list
            </Button>
          )}
          {showForm && (
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="task"
                value={newList}
                onChange={handleInput}
                autoFocus
              />
              <Button>Add</Button>
              <Button type="button" onClick={handleCanselCreate}>
                Cancel
              </Button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};
