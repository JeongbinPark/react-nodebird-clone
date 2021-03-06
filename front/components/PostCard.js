import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PostImage from './PostImage';
import Comments from './Comments';
import PostCardContent from './PostCardContent';
import FollowButton from './FollowButton';
import { removePostRequestAction } from '../actions'
import { Card, Avatar, Popover, Button } from 'antd';
import { RetweetOutlined, HeartOutlined, HeartTwoTone, CommentOutlined, EllipsisOutlined } from '@ant-design/icons';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);
  const [commentsFormOpened, setCommentsFormOpened] = useState(false);
  const meId = useSelector((state)=>state.user.me?.id);
  const onToggleLiked = useCallback(()=>{
    setLiked((liked)=>!liked);
  })
  const onToggleComment = useCallback(()=>{
    setCommentsFormOpened((prev)=>!prev);
  }, []);
  const onRemovePost = useCallback(()=>{
    dispatch(removePostRequestAction(post.id));
  },[]);

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
            <Button onClick={onRemovePost}>삭제</Button>
            </>
            :
            <Button>신고</Button>}
          </Button.Group>
         )}>
         <EllipsisOutlined />
        </Popover>,
      ]}
      extra={meId && <FollowButton post={post} />}
    >
      <Card.Meta 
        avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
        title={post.User.nickname}
        description={<PostCardContent postData={post.content}></PostCardContent>}
      />
    </Card>
    {commentsFormOpened && <Comments post={post}/>}
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