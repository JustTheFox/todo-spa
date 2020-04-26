import React, { useEffect } from 'react';
import Logo from '../../components/logo/logo';
import Search from '../../components/search/search';
import Button from '../../components/button/button';
import { IconMoon, IconSun } from '../../components/icons/icons';
import { useTheme } from '../../context/theme-context';
import './header.scss';

const Header = () => {
  const { THEMES, theme, onSetTheme } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const btnTheme = theme === THEMES.DARK ? 'light' : 'dark';

  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <div className="header__search">
        <Search />
      </div>
      <div className="header__theme-btn">
        <Button
          theme={btnTheme}
          className="btn--toggle"
          icon
          onClick={onSetTheme}
        >
          {theme === THEMES.DARK ? <IconSun /> : <IconMoon />}
        </Button>
      </div>
    </header>
  );
};

export default Header;
