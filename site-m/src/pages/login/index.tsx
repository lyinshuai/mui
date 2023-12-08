import React from 'react';
import LoginForm from './form';
import LoginBanner from './banner';
import styles from './style/index.module.less';

function Login(props) {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div className={styles['logo-text']}>M Design</div>
      </div>
      <div className={styles.banner}>
        <div className={styles['banner-inner']}>
          <LoginBanner />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles['content-inner']}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
Login.displayName = 'LoginPage';

export default Login;
