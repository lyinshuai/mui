import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from '@arco-design/web-react';
import zhCN from '@arco-design/web-react/es/locale/zh-CN';
import Navbar from '@m-design/m-site-navbar';
import App from './App';
import ScrollToTop from './widget/scrollTop';
import { GlobalContext } from './context';
import tea from './utils/tea';
import locale from './locale/zh';
import './style/index.less';

function Index() {
  return (
    <BrowserRouter>
      <Navbar.NavbarThemeProvider>
        <GlobalContext.Provider value={{ lang: 'zh-CN', locale }}>
          <ScrollToTop />
          <ConfigProvider locale={zhCN}>
            <App />
          </ConfigProvider>
        </GlobalContext.Provider>
      </Navbar.NavbarThemeProvider>
    </BrowserRouter>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));

tea({ name: 'site_components_zh' });
