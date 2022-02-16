import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import ImagesZoom from './ImagesZoom';
import styled from 'styled-components';
import { PlusCircleOutlined } from '@ant-design/icons';

const HalfImg = styled.img`
  display: inline-block;
  width: 50%;
`

const MoreImage = styled.div`
  display: inline-block;
  height: 100%;
  width: 50%;
  text-align: center;
  vertical-align: middle;

  & > PlusCircleOutlined {
    width: 
  }
`

const PostImage = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);
  const onZoom = useCallback(()=>{
    setShowImagesZoom(true);
  },[])
  const onClose = useCallback(()=>{
    setShowImagesZoom(false);
  },[])

  if(images.length == 1){
      return (
        <>
          <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
          {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
        </>
      ) 
    } else if (images.length == 2){
      return (
        <>
        <HalfImg role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <HalfImg role="presentation" src={images[1].src} alt={images[1].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose}/>}
        </>
      )
    } 
    return (
      <>
        <HalfImg role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
        <MoreImage role="presentation" onClick={onZoom} >
          <PlusCircleOutlined style={{width: '10%', height: '10%' }}/>
          <br />
          {images.length - 1}개의 이미지 더보기
        </MoreImage>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    )
    
  }

PostImage.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string
  })
  )
};

export default PostImage;