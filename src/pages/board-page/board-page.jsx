import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchListsAction,
  createListAction,
  // editListAction,
  deleteListAction,
  createTaskAction,
  // editTaskAction,
  deleteTaskAction,
} from '../../store/actions/lists';
import { Page } from '../../layout/page';
import { Title } from '../../components/title';
import { Input } from '../../components/field';
import { Button } from '../../components/button';

export const BoardPage = () => {
  const [showCreateList, setShowCreateList] = useState(false);
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [newList, setNewList] = useState('');
  const [newTask, setNewTask] = useState('');

  const { boardId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListsAction(boardId));
  }, []);

  useEffect(() => {
    dispatch(fetchListsAction(boardId));
  }, [boardId]);

  const createList = useCallback(
    (item) => {
      dispatch(createListAction(item));
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

  const handleCreateTask = () => setShowCreateTask(true);
  const handleCanselCreateTask = () => setShowCreateTask(false);

  const handleListInput = ({ target }) => setNewList(target.value);
  const handleTaskInput = ({ target }) => setNewTask(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newList.trim()) return;

    createList({
      title: newList,
      boardId,
    });
    handleCanselCreateList();
  };

  const handleSubmitTask = (e) => {
    e.preventDefault();

    if (!newList.trim()) return;

    createList({
      title: newList,
      boardId,
    });
    handleCanselCreateList();
  };

  const renderList = () => {
    if (lists.length === 0) {
      return <p>The board is empty. Do you want to create a new list?</p>;
    } else {
      return (
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
              <Button type="button" onClick={handleCreateTask}>
                Add task
              </Button>
              {showCreateTask && (
                <form onSubmit={handleSubmitTask}>
                  <Input
                    type="text"
                    name="task"
                    value={newTask}
                    onChange={handleTaskInput}
                  />
                  <Button>Add</Button>
                  <Button type="button" onClick={handleCanselCreateTask}>
                    Cancel
                  </Button>
                </form>
              )}
            </li>
          ))}
        </ul>
      );
    }
  };

  return (
    <Page>
      <Title size="large">Lists</Title>
      {isFetching && <p>Loading...</p>}
      {renderList()}
      <Button type="button" onClick={handleCreateList}>
        Create
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
