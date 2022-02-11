import React, { useMemo } from 'react';
import { Input } from 'antd';

const NicknameEditForm = () => {
  const style = useMemo(()=>({
    marginBottom: '20px',
    border: '1px solid #d9d9d9',
    padding: '30px'
  }), []);

  return (
    <Input.Search style={style}
      addonBefore="Nickname"
      enterButton="수정"
      />
  )
};

export default NicknameEditForm;