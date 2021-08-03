import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function ImageSlide({ height }) {
  const [slideDatas, setSlideDatas] = useState();

  useEffect(() => {
    fetch('/data/SlideData.json')
      .then(res => res.json())
      .then(data => {
        setSlideDatas(data.imgUrls);
      });
  }, [height]);

  return (
    <Carousel dynamicHeight="true" minHeight="100%" showThumbs="false">
      {slideDatas?.map((slideData, index) => {
        return (
          <StoryBannerWrapper>
            <StoryBanner
              alt="slide image"
              src={slideData}
              key={index}
              height={height}
            />
          </StoryBannerWrapper>
        );
      })}
    </Carousel>
  );
}

export default ImageSlide;

const StoryBannerWrapper = styled.div`
  min-height: 100%;
  flex: 1 0 100%;
  max-width: 100%;
  overflow: hidden;
  border: 3px solid green;
`;

const StoryBanner = styled.img`
  /* height: ${props =>
    props.height > 408 ? `${props.height}px` : '408px'}; */
  height: 392px;
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
  overflow: hidden;
`;
