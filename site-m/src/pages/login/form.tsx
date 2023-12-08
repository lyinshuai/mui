import { Form, Input, Button, Space } from '@arco-design/web-react';
import { FormInstance } from '@arco-design/web-react/es/Form';
import { IconLock, IconUser } from '@arco-design/web-react/icon';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './style/index.module.less';

export default function LoginForm() {
  const formRef = useRef<FormInstance>();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  function login(params) {
    setErrorMessage('');
    setLoading(true);
    axios
      .post('/api/auth/login', params)
      .then((res) => {
        const { code, error } = res.data;
        if (code === 0) {
          const redirect = new URL(window.location.toString()).searchParams.get('redirect');
          window.location.href = redirect || '/';
        } else {
          setErrorMessage(error || '登录出错，请刷新重试');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function onSubmitClick() {
    formRef.current.validate().then((values) => {
      login(values);
    });
  }
  useEffect(() => {}, []);

  return (
    <div className={styles['login-form-wrapper']}>
      <div className={styles['login-form-title']}>登录 M Design</div>
      <div className={styles['login-form-error-msg']}>{errorMessage}</div>
      <Form className={styles['login-form']} layout="vertical" ref={formRef}>
        <Form.Item field="userName" rules={[{ required: true, message: '用户名不能为空' }]}>
          <Input prefix={<IconUser />} placeholder="请输入sso账号" onPressEnter={onSubmitClick} />
        </Form.Item>
        <Form.Item field="userPwd" rules={[{ required: true, message: '密码不能为空' }]}>
          <Input.Password
            prefix={<IconLock />}
            placeholder="请输入密码"
            onPressEnter={onSubmitClick}
          />
        </Form.Item>
        <Space size={16} direction="vertical">
          <Button type="primary" long onClick={onSubmitClick} loading={loading}>
            登录
          </Button>
        </Space>
      </Form>
    </div>
  );
}
