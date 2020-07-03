import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchBoardAction,
  toggleBoardAction,
  editBoardAction,
  deleteBoardAction,
} from '../../store/actions/current-board';
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
import { Button } from '../../components/button';
import { IconFavorite, IconPensil, IconTrash } from '../../components/icons';
import { AddBoardModal } from '../../components/modal/add-board-modal';
import './board-page.scss';

export const BoardPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { boardId } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoardAction(boardId));
    dispatch(fetchListsAction(boardId));
  }, []);

  const board = useSelector((store) => store.currentBoard.item) || {};
  const isFetching = useSelector((store) => store.lists.isFetching);
  const lists = useSelector((store) => store.lists.items) || [];

  useEffect(() => {
    document.body.style.backgroundColor = board?.color?.hex || 'transparent';
    return () => (document.body.style.backgroundColor = '');
  }, [board]);

  const toggleBoard = useCallback(
    (boardId, board) => {
      dispatch(toggleBoardAction(boardId, board));
    },
    [dispatch],
  );

  const editBoard = useCallback(
    (boardId, board) => {
      dispatch(editBoardAction(boardId, board));
    },
    [dispatch],
  );

  const deleteBoard = useCallback(
    (boardId) => {
      dispatch(deleteBoardAction(boardId));
      history.push('/');
    },
    [dispatch],
  );

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

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const hanleOkModal = (data) => {
    editBoard(boardId, data);
  };

  return (
    <Page>
      <div className="board-page__title-wrapper">
        <Title size="large" className="board-page__title">
          {board.title || 'Lists'}
        </Title>
        <div className="board-page__actions">
          <Button
            title="Add to favorites"
            icon
            onClick={() => toggleBoard(boardId, board)}
          >
            <IconFavorite />
          </Button>
          <Button title="Edit board" icon onClick={handleOpenModal}>
            <IconPensil />
          </Button>
          <Button
            title="Delete board"
            icon
            onClick={() => deleteBoard(boardId)}
          >
            <IconTrash />
          </Button>
        </div>
      </div>

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
      {showModal && (
        <AddBoardModal
          initialState={board}
          onOk={hanleOkModal}
          onClose={handleCloseModal}
        />
      )}
    </Page>
  );
};
