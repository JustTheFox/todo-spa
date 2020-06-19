import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  createBoardAction,
  deleteBoardAction,
} from '../../store/actions/boards';
import { Page } from '../../layout/page';
import { Title } from '../../components/title';
import { fetchBoards } from '../../store/actions/boards';
import { AddBoardModal } from '../../components/modal/add-board-modal';
import { Button } from '../../components/button';

export const MainPage = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards());
  }, []);

  const createBoard = useCallback(
    (item) => {
      dispatch(createBoardAction(item));
    },
    [dispatch],
  );

  const deleteBoard = useCallback(
    (id) => {
      dispatch(deleteBoardAction(id));
    },
    [dispatch],
  );

  const isFetching = useSelector((store) => store.boards.isFetching);
  const boards = useSelector((store) => store.boards.items) || [];

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const hanleOkModal = (data) => {
    createBoard(data);
  };

  return (
    <Page>
      <Title>Boards</Title>
      {isFetching && <p>isFetching...</p>}
      <ul>
        {boards.map(({ id, title }) => (
          <li key={id}>
            <Link to={`boards/${id}`}>{title}</Link>
            <Button
              type="button"
              onClick={() => deleteBoard(id)}
              className="ml-2"
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
      <Button type="button" onClick={handleOpenModal}>
        Add board
      </Button>
      {showModal && (
        <AddBoardModal onOk={hanleOkModal} onClose={handleCloseModal} />
      )}
    </Page>
  );
};
