import React, {useCallback} from 'react';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequestAction } from '../actions';
import styled from 'styled-components';
import { Form, Input, Button, Space } from 'antd';
const StyledForm = styled(Form)`
  padding : 10px;
`

const LoginForm = () => {
  const dispatch = useDispatch();
  const loginLoading = useSelector((state)=> state.user.loginLoading);
  const [UserEmail, onChangeEmail] = useInput('');
  const [UserPassword, onChangePassword] = useInput('');

  const onSubmitForm = useCallback(()=>{
    dispatch(loginRequestAction({UserEmail, UserPassword}))
  },[UserEmail, UserPassword])

  return(
    <StyledForm
    onFinish={onSubmitForm}
    autoComplete="off"
    >
      <Form.Item
        label="이메일"
        name="email"
        rules={[{required: true, message: '이메일을 입력해주세요.' }]}
      >
        <Input value={UserEmail} onChange={onChangeEmail} required/>
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
        <Button type="primary" htmlType="submit" loading={loginLoading}>
          로그인
        </Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
        </Space>
      </Form.Item>
    </StyledForm>
  );
}

export default LoginForm;