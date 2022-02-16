import React, { useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import useInput from '../hooks/useInput';

const CommentForm = () => {
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmit = useCallback(()=>{
    
  },[commentText])
  return (
    <Form onFinish={onSubmit}>
      <Form.Item>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4}/>
        <Button type="primary" htmlType="submit" style={{float: 'right'}}>올리기</Button>
      </Form.Item>
    </Form>
  );
}

export default CommentForm;