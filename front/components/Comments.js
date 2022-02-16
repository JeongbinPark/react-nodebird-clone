import React from 'react';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';
import { List, Comment, Avatar } from 'antd';

const Comments = ({ post } ) => {
  return (
    <>
      <CommentForm />
      <List
        header={`${post.Comments.length }개의 댓글`}
        itemLayout="horizontal"
        dataSource={post.Comments}
        renderItem={item => (
          <Comment
          author={<a>{item.User.nickname}</a>}
          avatar={<Avatar alt="Han Solo">{item.User.nickname[0]}</Avatar>}
          content={item.content}
          ></Comment>
        )}
      >
        
      </List>
    </>
  )
}

Comments.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    User: PropTypes.shape({
      id: PropTypes.number.isRequired,
      nickname: PropTypes.string.isRequired
    }),
    content: PropTypes.string.isRequired,
    Images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string
    })),
    Comments: PropTypes.arrayOf(PropTypes.shape({
      User: PropTypes.shape({
        nickname: PropTypes.string.isRequired
      }),
      content: PropTypes.string.isRequired
    }))
  })
}

export default Comments;