import React, { useMemo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { changeNicknameRequestAction } from '../actions';
import { Input } from 'antd';

const NicknameEditForm = () => {
  const style = useMemo(()=>({
    marginBottom: '20px',
    border: '1px solid #d9d9d9',
    padding: '30px'
  }), []);

  const dispatch = useDispatch();
  const [newNickname, onChangeNewNickname, setNewNickname] = useInput('');
  const { changeNicknameDone } = useSelector((state) => state.user);

  useEffect(() => {
    if(changeNicknameDone) setNewNickname('');
  }, [changeNicknameDone])
  
  const onSubmitNickname = useCallback(()=>{
    dispatch(changeNicknameRequestAction(newNickname));
  }, [newNickname]);


  return (
    <Input.Search style={style}
      addonBefore="Nickname"
      enterButton="수정"
      value={newNickname}
      onChange={onChangeNewNickname}
      onSearch={onSubmitNickname}
      />
  )
};

export default NicknameEditForm;