import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';

const Page = ({ children }) => {
  return (
    <>
      <Header>
        <h2>Todo App</h2>
      </Header>
      <Content>{children}</Content>
    </>
  );
};

export default Page;
