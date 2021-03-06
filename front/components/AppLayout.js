import React from 'react';
import propTypes from "prop-types";
import Link from "next/link";
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';
import { Menu, Input, Row, Col } from 'antd';

const StyledInputSearch = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({children}) => {
  const me = useSelector((state)=>state.user?.me);

  return(
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/"><a>노드버드</a></Link>
        </Menu.Item>
        <Menu.Item key="profile">
         <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item key="search">
          <StyledInputSearch placeholder="input search text" enterButton />
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/JeongbinPark/" target="_blank" rel="noreferrer noopener">Made by FeynP</a>
        </Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
}

export default AppLayout;