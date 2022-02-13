import React, {useCallback} from 'react';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import styled from 'styled-components';
import { Form, Input, Button, Space } from 'antd';

const StyledForm = styled(Form)`
  padding : 10px;
`

const LoginForm = ({setIsLoggedIn}) => {
  const [UserId, onChangeId] = useInput('');
  const [UserPassword, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(()=>{
    setIsLoggedIn(true);
  },[UserId, UserPassword])

  return(
    <StyledForm
    onFinish={onSubmitForm}
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
    </StyledForm>
  );
}

export default LoginForm;