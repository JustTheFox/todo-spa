import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import Form from '../form/form';
import { Input, Textarea } from '../field';
import Button from '../button/button';
import { IconList, IconPlus, IconText } from '../icons/icons';
import { addTaskAction } from '../../store/actions';
import './task-form.scss';

const TaskForm = () => {
  const initialStateTask = {
    id: null,
    title: '',
    description: '',
    list: [],
    timestamp: null,
    done: false,
    liked: false,
  };

  const initialStateListItem = {
    id: null,
    title: '',
    done: false,
  };

  const [task, setTask] = useState(initialStateTask);
  const [listItem, setListItem] = useState(initialStateListItem);
  const [list, setList] = useState([]);
  const [addComment, setAddComment] = useState(false);
  const [addList, setAddList] = useState(false);
  const dispatch = useDispatch();

  const handleAddComment = () => {
    setAddComment(!addComment);
    if (task.description !== '') {
      setTask({
        ...task,
        description: '',
      });
    }
  };

  const handleAddList = () => {
    setAddList(!addList);
  };

  const addTask = useCallback(
    (task) => {
      dispatch(addTaskAction(task));
    },
    [dispatch],
  );

  const onChange = ({ target }) => {
    setTask((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const onListItemChange = ({ target: { value } }) => {
    const id = list.length + 1;
    setListItem({
      id,
      title: value,
    });
  };

  const onListItemAdd = () => {
    if (listItem.title.trim()) {
      setList((prevState) => {
        return [...prevState, listItem];
      });
      setListItem(initialStateListItem);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (task.title.trim()) {
      addTask({
        ...task,
        id: v4(),
        timestamp: Date.now(),
        list,
      });
      setTask(initialStateTask);
      setList([]);
    }
  };

  return (
    <div className="task-form">
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          name="title"
          placeholder="Заголовок"
          value={task.title}
          onChange={onChange}
          maxLength={150}
        />
        {addComment && (
          <Textarea
            type="text"
            name="description"
            placeholder="Описание"
            value={task.description}
            onChange={onChange}
            maxLength={500}
          />
        )}
        {addList && (
          <div className="task-form__add-list">
            <Input
              type="text"
              name="list-item"
              placeholder="Элемент списка"
              value={listItem.title}
              onChange={onListItemChange}
              maxLength={150}
            />
            <Button
              type="button"
              title="Добавить элемент"
              className="ml-2"
              theme="primary"
              onClick={onListItemAdd}
            >
              <IconPlus />
            </Button>
          </div>
        )}
        {list.length > 0 && (
          <ul className="mt-3 mb-2">
            {list.map(({ id, title }) => (
              <li key={id}>{title}</li>
            ))}
          </ul>
        )}
        <div className="task-form__buttons mt-3">
          <Button
            type="button"
            title="Добавить описание"
            className="mr-2"
            theme="primary"
            icon
            onClick={handleAddComment}
          >
            <IconText />
          </Button>
          <Button
            type="button"
            title="Добавить список"
            className="mr-2"
            theme="primary"
            icon
            onClick={handleAddList}
          >
            <IconList />
          </Button>
          <Button theme="primary">Создать</Button>
        </div>
      </Form>
    </div>
  );
};

export default TaskForm;
