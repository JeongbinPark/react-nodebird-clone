import React, { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PostImage from './PostImage';
import Comments from './Comments';
import { Card, Avatar, Popover, Button } from 'antd';
import { RetweetOutlined, HeartOutlined, HeartTwoTone, CommentOutlined, EllipsisOutlined } from '@ant-design/icons'

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentsFormOpened, setCommentsFormOpened] = useState(false);
  const meId = useSelector((state)=>state.user.me?.UserId);
  const onToggleLiked = useCallback(()=>{
    setLiked((liked)=>!liked);
  })
  const onToggleComment = useCallback(()=>{
    setCommentsFormOpened((prev)=>!prev);
  }, []);

  return (
    <>
    <Card
      cover={post.Images[0] && <PostImage images={post.Images} />}
       actions={[
        <RetweetOutlined key="retweet" />,
        liked 
          ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLiked} />
          : <HeartOutlined key="heart" onClick={onToggleLiked} />,
        <CommentOutlined key="comment" onClick={onToggleComment} />,
        <Popover key="more" 
         content={(
          <Button.Group>
            {meId && meId === post.User.id 
            ?
            <>
            <Button>수정</Button>
            <Button>삭제</Button>
            </>
            :
            <Button>신고</Button>}
          </Button.Group>
         )}>
         <EllipsisOutlined />
        </Popover>,
      ]}
    >
      <Card.Meta 
        avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
        title={post.User.nickname}
        description={post.content}
      />
    </Card>
    {commentsFormOpened && <Comments / >}
    </>
  );
}

PostCard.propTypes = {
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


export default PostCard;