import React from 'react';
import { Header } from '../header/header';
import { Content } from '../content/content';
import './page.scss';

export const Page = ({ withoutHeader, children }) => {
  return (
    <>
      {!withoutHeader && <Header />}
      <Content>{children}</Content>
    </>
  );
};
