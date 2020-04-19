import { TOGGLE_THEME, THEME } from '../const';

export default (state = THEME.DARK, { type }) => {
  switch (type) {
    case TOGGLE_THEME:
      return state === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    default:
      return state;
  }
};
