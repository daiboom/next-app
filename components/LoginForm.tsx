import React, { useCallback, useEffect, useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import Login from '../pages/account/login';

const LoginForm = () => {

  const [email, onChangeEmail] = useState('dbchoe')
  const [password, onChangePassword] = useState('222222')

  useEffect(() => {
    console.log(email)
  }, [email, password])


  const login = useCallback(() => {
    console.log('로그인 함수 실행')
  }, [])

  return (
    <Form
      name="basic"
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input value={email} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="button" onClick={login}>
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm