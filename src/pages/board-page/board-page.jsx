import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchListsAction,
  editListAction,
  deleteListAction,
  editTaskAction,
  deleteTaskAction,
} from '../../store/actions/lists';
import { Page } from '../../layout/page';
import { Title } from '../../components/title';
import { CardList, CardItem, CardTask } from '../../components/cards';

export const BoardPage = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListsAction(boardId));
  }, []);

  const editList = useCallback(
    (id, params) => {
      dispatch(editListAction(id, params));
    },
    [dispatch],
  );

  const deleteList = useCallback(
    (id) => {
      dispatch(deleteListAction(id));
    },
    [dispatch],
  );

  const editTask = useCallback(
    (id, params) => {
      dispatch(editTaskAction(id, params));
    },
    [dispatch],
  );

  const deleteTask = useCallback(
    (listId, taskId) => {
      dispatch(deleteTaskAction(listId, taskId));
    },
    [dispatch],
  );

  const isFetching = useSelector((store) => store.lists.isFetching);
  const lists = useSelector((store) => store.lists.items) || [];

  return (
    <Page>
      <Title size="large">Lists</Title>
      {isFetching && <p>Loading...</p>}
      <CardList boardId={boardId}>
        {lists.map(({ id, title, tasks = [] }) => (
          <CardItem
            key={id}
            id={id}
            boardId={boardId}
            title={title}
            onEdit={editList}
            onDelete={deleteList}
          >
            {tasks.map(({ id: taskId, title: taskTitle }) => (
              <CardTask
                key={taskId}
                id={taskId}
                listId={id}
                onEdit={editTask}
                onDelete={deleteTask}
              >
                {taskTitle}
              </CardTask>
            ))}
          </CardItem>
        ))}
      </CardList>
    </Page>
  );
};
