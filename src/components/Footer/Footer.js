import React from 'react';
import styled from 'styled-components';
import { flexSet } from '../../styles/Variable';

function Footer() {
  return (
    <FooterLayoutContainer>
      <FooterLayoutWrapper>
        <FooterLayoutInnerWrapper>
          <FirstFooterLayoutContents>
            <CustomerCenterAndRelatedLinks>
              <div>
                <GoToCustomerCenterLink>
                  <CustomerCenterTitle>고객센터</CustomerCenterTitle>
                  <i className="fas fa-chevron-right" />
                </GoToCustomerCenterLink>
                <CustomerCenterTelNumber>1234-5678</CustomerCenterTelNumber>
                <CustomerCenterWorkTime>
24시간                </CustomerCenterWorkTime>
              </div>
              <RelatedLinksWrapper>
                <FaIcon className="fab fa-apple" />
                <FaIcon className="fab fa-google-play" />
                <FaIcon className="fas fa-quote-right" />
                <FaIcon className="fab fa-facebook-f" />
                <FaIcon className="fab fa-instagram" />
                <FaIcon className="fas fa-pencil-alt" />
              </RelatedLinksWrapper>
            </CustomerCenterAndRelatedLinks>
          </FirstFooterLayoutContents>
          <SecondFooterLayoutContents>
            {FOOTER_MENU_LIST.map(footerMenuList => {
              return (
                <SecondFooterLayoutContentsList key={footerMenuList.menuName}>
                  {footerMenuList.menuName}
                </SecondFooterLayoutContentsList>
              );
            })}
          </SecondFooterLayoutContents>
          <ThirdFooterLayoutContents>
            {CONTACT_INFORMATION_LIST.map(contactInformationList => {
              return (
                <ThirddFooterLayoutContentsList
                  key={contactInformationList.infoName}
                >
                  {contactInformationList.infoName} :{' '}
                  {contactInformationList.detailInfo}
                </ThirddFooterLayoutContentsList>
              );
            })}
          </ThirdFooterLayoutContents>
          <FourthFooterLayoutContents>
            안전거래를 보장합니다.
          </FourthFooterLayoutContents>
          <FourthFooterLayoutContentsBold>
통신중개업 사이트입니다          </FourthFooterLayoutContentsBold>
          <FifthFooterLayoutContents>
            은행의집 어떠신가요
          </FifthFooterLayoutContents>
          <SixthFooterLayoutContents>
            Copyright 2021
          </SixthFooterLayoutContents>
        </FooterLayoutInnerWrapper>
      </FooterLayoutWrapper>
    </FooterLayoutContainer>
  );
}

const FOOTER_MENU_LIST = [
  { menuName: '브랜드 스토리' },
  { menuName: '회사소개' },
  { menuName: '채용정보' },
  { menuName: '이용약관' },
  { menuName: '개인정보처리방침' },
  { menuName: '공지사항' },
  { menuName: '고객센터' },
  { menuName: '고객의 소리' },
  { menuName: '전문가 등록' },
  { menuName: '사업자 구매회원' },
  { menuName: '제휴/광고 문의' },
  { menuName: '입점신청 문의' },
];

const CONTACT_INFORMATION_LIST = [
  { infoName: '상호명', detailInfo: '지연월드' },
  {
    infoName: '이메일',
    detailInfo:
      '(고객문의) jiyonlee.d@gmail.com'
  },
  { infoName: '사장', detailInfo: '이지연' },
  {
    infoName: '주소',
    detailInfo: '서울 강남구 테헤란로',
  },
];

const FooterLayoutContainer = styled.div`
  height: 280px;
`;

const FooterLayoutWrapper = styled.div`
  height: 280px;
  margin-top: 60px;
  color: ${({ theme }) => theme.fontMainBlack};
  background-color: #fafafa;
`;

const FooterLayoutInnerWrapper = styled.div`
  max-width: 1256px;
  height: 280px;
  margin: 0 auto;
  padding: 30px 60px 40px;
`;

const FirstFooterLayoutContents = styled.div`
  height: 95px;
`;

const CustomerCenterAndRelatedLinks = styled.div`
  ${flexSet('space-between', 'start')}
`;

const GoToCustomerCenterLink = styled.span`
  font-size: 12px;
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

const CustomerCenterTitle = styled.span`
  margin-right: 5px;
`;

const CustomerCenterTelNumber = styled.div`
  margin-top: 5px;
  font-size: 28px;
  font-weight: 700;
  line-height: 36px;

  &:hover {
    cursor: pointer;
  }
`;

const CustomerCenterWorkTime = styled.div`
  color: ${({ theme }) => theme.fontFilterGray};
  font-size: 12px;
`;

const RelatedLinksWrapper = styled.div`
  margin: -3px -15px 25px;
  font-size: 25px;
  text-align: center;
`;

const FaIcon = styled.div`
  width: 30px;
  height: 30px;
  margin: 0px 6px;
  padding: 3px;

  &:hover {
    cursor: pointer;
  }
`;

const SecondFooterLayoutContents = styled.ul`
  display: flex;
  margin-bottom: 20px;
  font-size: 10px;
`;

const SecondFooterLayoutContentsList = styled.li`
  margin-right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const ThirdFooterLayoutContents = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-size: 10px;
`;

const ThirddFooterLayoutContentsList = styled.li`
  margin-right: 10px;
  padding-bottom: 10px;
  color: ${({ theme }) => theme.fontFilterGray};

  &:hover {
    cursor: pointer;
  }
`;

const FourthFooterLayoutContents = styled.span`
  margin-right: 5px;
  color: ${({ theme }) => theme.fontFilterGray};
  font-size: 10px;
`;

const FourthFooterLayoutContentsBold = styled(
  FourthFooterLayoutContents.withComponent('span')
)`
  font-weight: 700;

  &:hover {
    cursor: pointer;
  }
`;

const FifthFooterLayoutContents = styled.div`
  margin-top: 10px;
  color: ${({ theme }) => theme.fontFilterGray};
  font-size: 10px;
`;

const SixthFooterLayoutContents = styled.div`
  margin-top: 20px;
  font-size: 10px;
`;

export default Footer;
