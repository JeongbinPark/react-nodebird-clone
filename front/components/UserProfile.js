import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../actions';
import { Card, Avatar, Button} from 'antd';

const UserProfile = () =>{
  const {me, logoutLoading} = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const onLogOut = useCallback(()=>{
    dispatch(logoutRequestAction());
  },[])

  return(
    <Card
      actions={[
        <div key="twit"> Twit<br /> {me.Posts.length} </div>,
        <div key="followings"> followings<br /> {me.Followings.length} </div>,
        <div key="followers"> followers<br /> {me.Followers.length} </div>
      ]}
    >
      <Card.Meta 
       avatar={<Avatar>{me.nickname[0]}</Avatar>}
       title={me.nickname}
      />
      <Button onClick={onLogOut} loading={logoutLoading}>로그아웃</Button>
    </Card>
  );
}

export default UserProfile;