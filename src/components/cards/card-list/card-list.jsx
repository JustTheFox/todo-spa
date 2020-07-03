import React, { useState, useCallback, useRef } from 'react';
import { findDOMNode } from 'react-dom';
import { useDispatch } from 'react-redux';
import { Input } from '../../fields';
import { Button } from '../../button';
import {
  createListAction,
  // editListAction,
} from '../../../store/actions/lists';
import './card-list.scss';

export const CardList = ({ boardId, children }) => {
  const [showForm, setShowForm] = useState(false);
  const [newList, setNewList] = useState('');
  const createBtnRef = useRef(null);

  const scrollToBtn = (ref) => {
    let node = findDOMNode(ref.current);
    node.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  };

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
      boardId: Number(boardId),
      title: newList,
    });
    handleCanselCreate();
    scrollToBtn(createBtnRef);
  };

  return (
    <>
      <div className="card-list">
        <>{children}</>
        <div className="card-list__create" ref={createBtnRef}>
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
