import React, { useState } from 'react';
import Slider from "react-slick";
import PropTypes from 'prop-types';
import { CloseOutlined } from '@ant-design/icons';
import { Global, Overlay, Header, SlickWrapper, ImgWrapper, Indicator} from './styles';

const ImagesZoom = ({ images, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Overlay >
      <Global />
      <Header>
        <h1>상세이미지</h1>
        <div onClick={onClose} ><CloseOutlined  /></div>
      </Header>
      <SlickWrapper>
        <div>
        <Slider 
          initialSlide={0}
          afterChange={(slide)=>setCurrentSlide(slide)}
          infinite
          arrows={false}
          slidesToShow={1}
          slidesToScroll={1}
        >
          {images.map((item)=>(
            <ImgWrapper key={item.src}>
              <img src={item.src} alt={item.src} />
            </ImgWrapper>
          ))}
        </Slider>
        <Indicator>
          <div>{currentSlide + 1} / {images.length}</div>
        </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  )
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string
  })).isRequired,
  onClose: PropTypes.func.isRequired
};

export default ImagesZoom;