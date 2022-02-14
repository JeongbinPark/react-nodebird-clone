import React, { useState, useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { addPost } from '../actions';

const PostForm = () => {
  const dispatch = useDispatch();
  const imageInput = useRef();
  const { imagePaths } = useSelector((state)=>state.post);
  const [text, setText] = useState('');
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  },[]);
  const onSubmit = useCallback(()=>{
    dispatch(addPost());
    setText("");
  },[])
  const onClickImageUpload = useCallback(()=>{
    imageInput.current.click();
  },[imageInput.current])
  return (
    <Form onFinish={onSubmit}>
      <Form.Item>
        <Input.TextArea 
          value={text}
          onChange={onChangeText}
          placeholder="오늘 무슨 일이 있었나요?"
        />
      </Form.Item>
      <Form.Item>
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload} icon={<UploadOutlined />}>이미지 추가</Button>
        <Button type="primary" htmlType="submit" style={{float: 'right'}}>올리기</Button>
      </Form.Item>
      <Form.Item>
        {imagePaths.map((v)=>(
          <div key={v} style={{display: 'inline-block'}}>
            <img src={v} style={{width: '200px'}} alt={v} />
            <Button>제거</Button>
          </div>
        ))}
      </Form.Item>
    </Form>
  )
}

export default PostForm;