import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplayspeed: 1000,
};

function ImageSlide() {
  const [slideDatas, setSlideDatas] = useState();

  useEffect(() => {
    fetch('/data/SlideData.json')
      .then(res => res.json())
      .then(data => {
        setSlideDatas(data.imgUrls);
      });
  }, []);

  return (
    <StyledSlider {...settings}>
      {slideDatas?.map((slideData, index) => {
        return (
          <StoryBannerWrapper>
            <StoryBanner alt="slide image" src={slideData} key={index} />
          </StoryBannerWrapper>
        );
      })}
    </StyledSlider>
  );
}

export default ImageSlide;

const StyledSlider = styled(Slider)`
  .slick-slider {
    min-height: 100%;
    border: 5px solid blue;
  }
  .slick-list {
    height: 100%;
  }
  .slick-track {
    min-height: 100%;
    background-color: black;
  }

  .slick-prev {
    position: absolute;
    opacity: 1;
    left: 30px;
    bottom: -262px;
    color: #f5f5f5;
    z-index: 5;
  }

  .slick-prev:before {
    position: absolute;
    opacity: 1;
    left: -20px;
    bottom: -262px;
    color: #f5f5f5;
    z-index: 5;
  }

  .slick-next {
    position: absolute;
    opacity: 1;
    right: 5px;
    bottom: -262px;
    color: #f5f5f5;
    z-index: 5;
  }

  .slick-next:before {
    position: absolute;
    opacity: 1;
    right: 5px;
    bottom: -262px;
    color: #f5f5f5;
    z-index: 5;
  }

  ul.slick-dots {
    position: absolute;
    bottom: 10px;
    z-index: 2;
    color: white;
  }
  .slick-dots li.slick-active button:before {
    position: absolute;
    bottom: 10px;
    z-index: 2;
    color: white;
  }

  .slick-dots li button:before {
    position: absolute;
    bottom: 10px;
    z-index: 2;
    color: white;
  }
`;

const StoryBannerWrapper = styled.div`
  min-height: 100%;
  flex: 1 0 100%;
  max-width: 100%;
  overflow: hidden;
  border: 3px solid green;
`;

const StoryBanner = styled.img`
  height: 100%;
  /* height: 500px; */
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
  overflow: hidden;
`;
