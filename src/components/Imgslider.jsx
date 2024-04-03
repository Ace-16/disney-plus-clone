import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


function Imgslider() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true
  };
  return (
    <Carousel {...settings}>
        <Wrap>
          <img src="/images/slider-badag.jpg" alt="" />
        </Wrap> 
        <Wrap>
          <img src="/images/slider-badging.jpg" alt="" />
        </Wrap> 
        <Wrap>
          <img src="/images/slider-scale.jpg" alt="" />
        </Wrap> 
        <Wrap>
          <img src="/images/slider-scales.jpg" alt="" />
        </Wrap>
    </Carousel>
  )
}

export default Imgslider

const Carousel = styled(Slider)`

`

const Wrap = styled.div`

`