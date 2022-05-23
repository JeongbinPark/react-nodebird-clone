import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import Router from 'next/router';
import useInput from '../hooks/useInput';
import { signupRequestAction } from '../actions';
import styled from 'styled-components';
import { Form, Input, Button, Checkbox } from 'antd';

const ErrorMessage = styled.div`
  color:red;
`

const Signup = () => {
  const dispatch = useDispatch();
  const { signupLoading, signupDone, signupError } = useSelector((state) => state.user);

  useEffect(()=>{
    if(signupDone){
      Router.push('/');
    }
  }, [signupDone]);

  useEffect(()=>{
    if(signupError){
      alert(signupError);
    }
  }, [signupError]);

  const [userEmail, onChangeUserEmail] = useInput('');
  const [userPassword, onChangeUserPassword] = useInput('');
  const [userNickname, onChangeUserNickname] = useInput('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');
  const [userPasswordError, setUserPasswordError] = useState(false);
  const onUserConfirmPasswordChange = useCallback((e)=>{
    setUserConfirmPassword(e.target.value);
    setUserPasswordError(e.target.value !== userPassword);
  },[userPassword])
  const [term, setTerm] = useState(false);
  const [termError, setTermError] = useState(false);
  const onTermChange = useCallback((e)=>{
    setTerm(e.target.checked);
    setTermError(false);
  },[]);
  
  const onSubmit = useCallback(()=>{
    if(userPassword !== userConfirmPassword) return setUserPasswordError(true);
    if(!term) return setTermError(true);
    dispatch(signupRequestAction({userEmail, userPassword, userNickname}));
  },[userEmail, userPassword, userNickname, userConfirmPassword, term]);

  return (
    <>
      <Head>
        <title>회원가입 | NodeBird</title>
      </Head>
      <AppLayout>
        <Form 
          onFinish={onSubmit}
          scrollToFirstError
        >
          <Form.Item
            label="이메일"
            name="email"
            rules={[
              // {type: 'email', message: 'The input is not valid E-mail!'},
              {required: true, message: '이메일을 입력해주세요.' }
            ]}
          >
            <Input value={userEmail} onChange={onChangeUserEmail} required />
          </Form.Item>
          <Form.Item
            label="비밀번호"
            name="password"
            rules={[{ required: true, message: '비밀번호를 입력해주세요.'}]}
          >
            <Input.Password value={userPassword} onChange={onChangeUserPassword} required />
          </Form.Item>
          <Form.Item
            label="비밀번호 확인"
            name="confirm"
            rules={[{ required: true, message: '확인용 비밀번호를 입력해주세요.'}]}
          >
            <div>
              <Input.Password value={userConfirmPassword} onChange={onUserConfirmPasswordChange} required />
              {userPasswordError && <ErrorMessage name="error">비밀번호가 일치하지 않습니다.</ErrorMessage>}
            </div>
          </Form.Item>
          <Form.Item
            label="닉네임"
            name="nickname2"
            rules={[{required: true, message: '닉네임을 입력해주세요.' }]}
          >
            <Input value={userNickname} onChange={onChangeUserNickname} required />
          </Form.Item>
          <Form.Item >
            <div>동의 사항</div>
            <div>
            <Checkbox name="userTerm" checked={term} onChange={onTermChange}>약관 동의 사항</Checkbox>
              {termError && <ErrorMessage>약관에 동의하셔야합니다.</ErrorMessage>}
            </div>
          </Form.Item>
           <Form.Item >
             <Button type="primary" htmlType="submit" loading={signupLoading}>가입하기</Button> 
          </Form.Item>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;