import React, { useCallback, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Logo from '../../components/logo/logo';
import Search from '../../components/search/search';
import Button from '../../components/button/button';
import { IconMoon, IconSun } from '../../components/icons/icons';
import { toggleThemeAction } from '../../store/actions';
import { THEME } from '../../store/const';
import './header.scss';

const Header = () => {
  const theme = useSelector((store) => store.theme, shallowEqual);
  const dispatch = useDispatch();

  const onChangeTheme = useCallback(() => {
    dispatch(toggleThemeAction());
  }, [dispatch]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const btnTheme = theme === THEME.DARK ? 'light' : 'dark';

  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__search">
        <Search />
      </div>
      <div className="header__theme-btn">
        <Button theme={btnTheme} icon onClick={onChangeTheme}>
          {theme === THEME.DARK ? <IconSun /> : <IconMoon />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
