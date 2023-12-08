import React, { useContext, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Navbar from '@m-design/m-site-navbar';
import Home from './pages/home';
import Customer from './pages/customer';
import Login from './pages/login';
import page from './page';
import { GlobalContext } from './context';
import navbarProps from './utils/navbarProps';
import { goPath, i18nRedirect } from './utils/i18n';
import UserNavbarBorderStyle from './hooks/useNavbarBorderStyle';
import Logo from './assets/logo/logo-m.svg';

export default function App() {
  const { lang, theme, toggleTheme, user } = useContext(GlobalContext);
  const history = useHistory();
  const isHome = history.location.pathname === '/';
  const isLogin = history.location.pathname.startsWith('/login');

  const navbarBorderStyle = UserNavbarBorderStyle();

  useEffect(() => {
    i18nRedirect(lang);
  }, [lang]);

  return (
    <div id="app">
      {!isLogin && (
        <Navbar
          logo={<Logo width="143px" height="24px" />}
          theme={theme}
          onChangeTheme={toggleTheme}
          lang={lang}
          onChangeLanguage={(lang) => goPath(lang, true)}
          history={history}
          isHome={isHome}
          style={isHome ? navbarBorderStyle : {}}
          user={user}
          {...navbarProps}
        />
      )}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/en-US" exact component={Home} />
        <Route path="/showcase/en-US" component={Customer} />
        <Route path="/showcase" component={Customer} />
        <Route path="/login" component={Login} />
        <Route path="*" component={page} />
      </Switch>
    </div>
  );
}
