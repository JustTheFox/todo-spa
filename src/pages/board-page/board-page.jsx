import React, { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchLists,
  addListAction,
  deleteListAction,
} from '../../store/actions/lists';
import { Page } from '../../layout/page';
import { Title } from '../../components/title';
// import { AddBoardModal } from '../../components/modal/add-board-modal';
import { Button } from '../../components/button';

export const BoardPage = () => {
  // const [showModal, setShowModal] = useState(false);
  const { boardId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLists(boardId));
  }, []);

  // const addList = useCallback(
  //   (item) => {
  //     dispatch(addListAction(item));
  //   },
  //   [dispatch],
  // );

  const deleteList = useCallback(
    (id) => {
      dispatch(deleteListAction(id));
    },
    [dispatch],
  );

  const loading = useSelector((store) => store.lists.loading);
  const lists = useSelector((store) => store.lists.items) || [];

  // const handleOpenModal = () => setShowModal(true);
  // const handleCloseModal = () => setShowModal(false);

  // const hanleOkModal = (data) => {
  //   addList(data);
  // };

  return (
    <Page>
      <Title>Lists</Title>
      {loading && <p>loading...</p>}
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
                <li key={taskId}>{taskTitle}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {/* <Button type="button" onClick={handleOpenModal}>
        Add board
      </Button> */}
      {/* {showModal && (
        <AddListModal onOk={hanleOkModal} onClose={handleCloseModal} />
      )} */}
    </Page>
  );
};
