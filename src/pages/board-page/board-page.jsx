import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Page } from '../../layout/page';
import { Title } from '../../components/title';
import { fetchBoards } from '../../store/actions/boards';
import { AddBoardModal } from '../../components/modal/add-board-modal';

export const BoardPage = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards());
    // eslint-disable-next-line
  }, []);

  const loading = useSelector((store) => store.boards.loading);
  const boards = useSelector((store) => store.boards.boards) || [];

  return (
    <Page>
      <Title>Boards</Title>
      {loading && <p>loading...</p>}
      <ul>
        {boards.map(({ id, title }) => (
          <li key={id}>
            <Link to={`board/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => setShowModal(true)}>
        Add board
      </button>
      {showModal && <AddBoardModal onClose={() => setShowModal(false)} />}
    </Page>
  );
};
