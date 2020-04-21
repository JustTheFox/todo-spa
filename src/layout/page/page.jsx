import React from 'react';
import Header from '../header/header';
import Content from '../content/content';

const Page = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};

export default Page;
