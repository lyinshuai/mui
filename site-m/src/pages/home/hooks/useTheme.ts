import { useContext } from 'react';
import Navbar from '@m-design/m-site-navbar';

const { NavbarThemeContext } = Navbar;

function useTheme() {
  const { theme, realTheme, onHandleTheme } = useContext(NavbarThemeContext);

  return { theme, realTheme, onHandleTheme };
}

export default useTheme;
