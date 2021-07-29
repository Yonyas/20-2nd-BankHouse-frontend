import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlide from '../MainTop/ImageSlide/ImageSlide';
import styled from 'styled-components/macro';
import { flexSet } from '../../styles/Variable';
import { mainPadding } from '../../styles/Variable';

function MainTop() {
  return (
    <Row>
      <StoryEntryHomeHeaderImage>
        <Link to="/">
          <StoryEntryImageWrap>
            <StoryEntryImage
              alt="story image"
              src="https://images.unsplash.com/photo-1452457436726-a8e6ea2adf29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHRhYmxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            />
            <StoryEntryContentWrap>
              <StoryEntryContent>
                <StoryEntryContentCategory>34평 신축</StoryEntryContentCategory>
                <StoryEntryContentTitle>
                  일 년 내내 휴양지같은 집으로
                </StoryEntryContentTitle>
                <StoryEntryContentProfile>
                  <StoryEntryContentProfileImage
                    alt="profile image"
                    src="https://images.unsplash.com/photo-1452457436726-a8e6ea2adf29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHRhYmxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  />
                  <StoryEntryContentProfileName>
                    Bank House
                  </StoryEntryContentProfileName>
                </StoryEntryContentProfile>
              </StoryEntryContent>
              <StoryMore>보러가기</StoryMore>
            </StoryEntryContentWrap>
          </StoryEntryImageWrap>
        </Link>
      </StoryEntryHomeHeaderImage>
      <HomeHeaderBannerWrap>
        <Link to="/">
          <HomeHeaderBanner>
            <ImageSlide />
          </HomeHeaderBanner>
        </Link>
      </HomeHeaderBannerWrap>
    </Row>
  );
}

export default MainTop;

const Row = styled.div`
  ${flexSet('space-between', 'start')}
  ${mainPadding()}
  margin: 10px auto;
  max-height: 560px;
  align-items: stretch;
`;

const StoryEntryHomeHeaderImage = styled.article`
  padding: 0 15px;
  width: 75%;
  flex: 1 0 75%;
`;

const StoryMore = styled.div`
  ${flexSet('center', 'center')}
  border: 1px solid #fff;
  border-radius: 2px;
  padding: 10px;
  min-width: 86px;
`;

const StoryEntryImageWrap = styled.div`
  position: relative;
  flex: 1 0 100%;
  max-width: 100%;
  overflow: hidden;

  &:hover {
    ${StoryMore} {
      background-color: #00c7f5;
      border: none;
    }
  }
`;

const StoryEntryImage = styled.img`
  min-height: 408px;
  min-width: 100%;
  border-radius: 5px;
  object-fit: cover;
  z-index: -1;
`;

const StoryEntryContentWrap = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 30px;
  margin: 10px auto;
  color: #fff;
  z-index: 2;
`;

const StoryEntryContentProfile = styled.div`
  display: flex;
  align-items: center;
`;

const StoryEntryContentProfileImage = styled.img`
  width: 22px;
  height: 22px;
  border-radius: 70%;
  z-index: -1;
`;

const StoryEntryContent = styled.div`
  color: #ffffff;
`;

const StoryEntryContentCategory = styled.div`
  font-size: 15px;
`;

const StoryEntryContentTitle = styled.div`
  font-size: 32px;
  margin: 15px 0;
`;

const StoryEntryContentProfileName = styled.span`
  font-size: 13px;
`;

const HomeHeaderBannerWrap = styled.aside`
  position: relative;
  flex: 1 0 25%;
  padding: 0 15px;
  align-items: stretch;
  overflow: hidden;
`;

const HomeHeaderBanner = styled.div`
  width: 100%;
  height: 100%;
`;
