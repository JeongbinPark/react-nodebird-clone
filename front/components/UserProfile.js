import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../actions';
import { Card, Avatar, Button} from 'antd';

const UserProfile = () =>{
  const dispatch = useDispatch();
  const onLogOut = useCallback(()=>{
    dispatch(logout());
  },[])

  return(
    <Card
      actions={[
        <div key="twit"> Twit<br /> 0 </div>,
        <div key="followings"> followings<br /> 0 </div>,
        <div key="followers"> followers<br /> 0 </div>
      ]}
    >
      <Card.Meta 
       avatar={<Avatar>FP</Avatar>}
       title="FeynP"
      />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
}

export default UserProfile;