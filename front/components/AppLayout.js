import React from 'react';
import propTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from 'antd';

const AppLayout = ({children}) => {
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
          <Input.Search placeholder="input search text" enterButton style={{verticalAlign:'middle'}}/>
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          왼쪽메뉴
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          오른쪽메뉴
        </Col>
      </Row>
    </div>
  )
}

AppLayout.propTypes = {
  children: propTypes.node.isRequired,
}

export default AppLayout;