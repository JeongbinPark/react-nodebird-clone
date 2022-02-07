import React, {useState, useCallback} from 'react';
import Link from 'next/link';
import { Form, Input, Button, Space } from 'antd';

const LoginForm = () => {
  const [UserId, setUserId] = useState('');
  const [UserPassword, setUserPassword] = useState('');

  const onChangeId = useCallback((e) => {
    setUserId(e.target.value)
  },[]);
  const onChangePassword = useCallback((e) => {
    setUserPassword(e.target.value)
  },[]);

  return(
    <Form
    autoComplete="off"
    >
      <Form.Item
        label="아이디"
        name="id"
        rules={[{required: true, message: '이메일을 입력해주세요.' }]}
      >
        <Input value={UserId} onChange={onChangeId} required/>
      </Form.Item>
      <Form.Item
        label="비밀번호"
        name="password"
        rules={[{ required: true, message: '비밀번호를 입력해주세요.'}]}
      >
        <Input.Password value={UserPassword} onChange={onChangePassword} required/>
      </Form.Item>
      <Form.Item>
        <Space >
        <Button type="primary" htmlType="submit">
          로그인
        </Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;