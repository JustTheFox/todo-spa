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
import { Button } from '../../components/button';
import { CardList, CardItem } from '../../components/cards';

export const BoardPage = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchListsAction(boardId));
  }, []);

  useEffect(() => {
    dispatch(fetchListsAction(boardId));
  }, [boardId]);

  // const deleteList = useCallback(
  //   (id) => {
  //     dispatch(deleteListAction(id));
  //   },
  //   [dispatch],
  // );

  // const deleteTask = useCallback(
  //   (id) => {
  //     dispatch(deleteTaskAction(id));
  //   },
  //   [dispatch],
  // );

  const isFetching = useSelector((store) => store.lists.isFetching);
  const lists = useSelector((store) => store.lists.items) || [];

  const renderList = () => {
    if (lists.length === 0) {
      return <p>The board is empty. Do you want to create a new list?</p>;
    } else {
      return (
        <CardList boardId={boardId}>
          {lists.map(({ id, title, tasks = [] }) => (
            <CardItem key={id} id={id} title={title} tasks={tasks}>
              {/* <ul>
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
              </ul> */}
            </CardItem>
          ))}
        </CardList>
      );
    }
  };

  return (
    <Page>
      <Title size="large">Lists</Title>
      {isFetching && <p>Loading...</p>}
      {renderList()}
    </Page>
  );
};
