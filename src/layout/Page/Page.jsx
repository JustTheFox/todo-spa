import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Button from '../../components/Button/Button';
import { IconMoon, IconSun } from '../../components/Icons/Icons';
import { THEME } from '../../store/const';

const Page = ({ children, theme, onChangeTheme }) => {
  return (
    <>
      <Header>
        <h2>Todo App</h2>
        <Button theme="secondary" onClick={onChangeTheme}>
          {theme === THEME.DARK ? <IconSun /> : <IconMoon />}
        </Button>
      </Header>
      <Content>{children}</Content>
    </>
  );
};

export default Page;
