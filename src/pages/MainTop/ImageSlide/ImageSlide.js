import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
    <Carousel dynamicHeight="true" minHeight="100%">
      {slideDatas?.map((slideData, index) => {
        return (
          <StoryBannerWrapper>
            <StoryBanner alt="slide image" src={slideData} key={index} />
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
  height: 100%;
  /* height: 500px; */
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
  overflow: hidden;
`;
