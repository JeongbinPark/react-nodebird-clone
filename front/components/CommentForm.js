import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentRequestAction } from '../actions';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import useInput from '../hooks/useInput';

const CommentForm = ({ postId }) => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText] = useInput("");
  const onSubmit = useCallback(()=>{
    dispatch(addCommentRequestAction({postId, userId, commentText}))
  },[postId, userId, commentText])
  return (
    <Form onFinish={onSubmit}>
      <Form.Item>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4}/>
        <Button type="primary" htmlType="submit" style={{float: 'right'}}>올리기</Button>
      </Form.Item>
    </Form>
  );
}

CommentForm.propTypes = {
  postId: PropTypes.number.isRequired,
}

export default CommentForm;