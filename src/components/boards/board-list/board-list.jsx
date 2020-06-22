import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AddBoardModal } from '../../modal/add-board-modal';
import { BoardItem } from '../board-item/board-item';
import { createBoardAction } from '../../../store/actions/boards';
import './board-list.scss';

export const BoardList = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const createBoard = useCallback(
    (item) => {
      dispatch(createBoardAction(item));
    },
    [dispatch],
  );

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const hanleOkModal = (data) => {
    createBoard(data);
  };

  return (
    <>
      <ul className="board-list">
        <>{children}</>
        <BoardItem isCreate onClick={handleOpenModal}>
          Create new board
        </BoardItem>
      </ul>
      {showModal && (
        <AddBoardModal onOk={hanleOkModal} onClose={handleCloseModal} />
      )}
    </>
  );
};
