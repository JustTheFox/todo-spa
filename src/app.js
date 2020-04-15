import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import uuid from 'uuid/v4';
import {
  addTaskAction,
  deleteTaskAction,
  toggleTaskAction,
  likeTaskAction,
} from './store/actions';
import Button from './components/Button/Button';

const App = () => {
  const initialState = {
    id: null,
    title: '',
    description: '',
    completed: false,
    liked: false,
  };
  const [task, setTask] = useState(initialState);
  const tasks = useSelector((store) => store.tasks, shallowEqual);
  const dispatch = useDispatch();
  const addTask = useCallback(
    (task) => {
      dispatch(addTaskAction(task));
    },
    [dispatch],
  );
  const deleteTask = useCallback(
    (id) => {
      dispatch(deleteTaskAction(id));
    },
    [dispatch],
  );
  const toggleTask = useCallback(
    (id) => {
      dispatch(toggleTaskAction(id));
    },
    [dispatch],
  );
  const likeTask = useCallback(
    (id) => {
      dispatch(likeTaskAction(id));
    },
    [dispatch],
  );

  const onChange = ({ target }) => {
    setTask((prevState) => ({
      ...prevState,
      id: uuid(),
      [target.name]: target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask(initialState);
  };

  return (
    <>
      <header>
        <h1>Todo App</h1>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={onChange}
            required
          />
          <input
            type="text"
            name="description"
            value={task.description}
            onChange={onChange}
            required
          />
          <Button>Add</Button>
        </form>
        <ul>
          {tasks.map(({ id, title, description }) => (
            <li key={id}>
              <h2>{title}</h2>
              {description && <p>{description}</p>}
              <Button>Delete</Button>
              <Button>Complete</Button>
              <Button>Like</Button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default App;
