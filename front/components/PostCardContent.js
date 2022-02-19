import React from 'react';
import Link from "next/link";
import PropTypes from 'prop-types';

const PostCardContent = ({ postData }) => {
  return (
    <>
    {postData.split(/(#[0-9A-Z_a-zㄱ-ㅎㅏ-ㅣ가-힣]+)/g).map((v, i)=>{
      if(v.match(/(#[0-9A-Z_a-zㄱ-ㅎㅏ-ㅣ가-힣]+)/g)){
        return <Link key={i} href={`/hashtag/${v.slice(1)}`}><a>{v}</a></Link>
      }
      return v;
    })}
    </>
  )
};

PostCardContent.propTypes = {
  postData : PropTypes.string.isRequired
}

export default PostCardContent;