import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchListsAction,
  addListAction,
  deleteListAction,
  // deleteTaskAction,
} from '../../store/actions/lists';
import { Page } from '../../layout/page';
import { Title } from '../../components/title';
import { Button } from '../../components/button';

export const BoardPage = () => {
  const [showCreateList, setShowCreateList] = useState(false);
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [newList, setNewList] = useState('');

  const { boardId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListsAction(boardId));
  }, []);

  useEffect(() => {
    dispatch(fetchListsAction(boardId));
  }, [boardId]);

  const addList = useCallback(
    (item) => {
      dispatch(addListAction(item));
    },
    [dispatch],
  );

  const deleteList = useCallback(
    (id) => {
      dispatch(deleteListAction(id));
    },
    [dispatch],
  );

  // const deleteTask = useCallback(
  //   (id) => {
  //     dispatch(deleteTaskAction(id));
  //   },
  //   [dispatch],
  // );

  const isFetching = useSelector((store) => store.lists.isFetching);
  const lists = useSelector((store) => store.lists.items) || [];

  const handleCreateList = () => setShowCreateList(true);
  const handleCanselCreateList = () => setShowCreateList(false);

  const handleListInput = ({ target }) => setNewList(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newList.trim()) return;

    addList({
      title: newList,
      boardId,
    });
    handleCanselCreateList();
  };

  return (
    <Page>
      <Title>Lists</Title>
      {isFetching && <p>Loading...</p>}

      <ul>
        {lists.map(({ id, title, tasks = [] }) => (
          <li key={id}>
            {title}
            <Button
              type="button"
              onClick={() => deleteList(id)}
              className="ml-2"
            >
              Delete
            </Button>
            <ul>
              {tasks.map(({ id: taskId, title: taskTitle }) => (
                <li key={taskId}>
                  {taskTitle}
                  <Button
                    type="button"
                    // onClick={() => deleteTask(taskId)}
                    className="ml-2"
                  >
                    Delete
                  </Button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Button type="button" onClick={handleCreateList}>
        Add board
      </Button>
      {showCreateList && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="list"
            value={newList}
            onChange={handleListInput}
          />
          <Button>Add</Button>
          <Button type="button" onClick={handleCanselCreateList}>
            Cancel
          </Button>
        </form>
      )}
    </Page>
  );
};
