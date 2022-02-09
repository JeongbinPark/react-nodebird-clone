import React, { useCallback } from 'react';
import { Card, Avatar, Button} from 'antd';

const UserProfile = ({setIsLoggedIn}) =>{
  const onLogOut = useCallback(()=>{
    setIsLoggedIn(false);
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