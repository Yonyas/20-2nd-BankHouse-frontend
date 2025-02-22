# Bank House(은행의집)

- 원스톱 인테리어 플랫폼 [오늘의집](https://ohou.se/) 을 모티브로 한 팀 프로젝트
- 커뮤니티, 스토어, 인테리어시공 중 SNS에서 핫 한 집구경 컨텐츠 및 커뮤니티 페이지를 메인 아이템으로 구현
- 스크럼방식으로 매일 미팅하며 서로 진도 체크하며 진행

# 프로젝트 기간

- 2021.05.24.~ 2021.06.04.

# :rocket:팀원

### Frontend 4명

### Backend 2명

_[백엔드 github 링크](https://github.com/wecode-bootcamp-korea/20-2nd-BankHouse-backend)_

## 적용 기술

- Front : `JavaScript`, `React(Hooks)`, `Styled Components`
- Back : `Python`, `Aquery`, `Django`, `Docker`, `AWS`
- Common : `Slack`, `Trello`, `GitHub`

## 구현 사항

### ✅ 로그인/회원가입 페이지

#### 일반 로그인 및 회원가입

- 정규식을 활용한 로그인/회원가입 유효성 체크
- 로그인/회원가입 input 값 유효성 체크 통과 여부 실시간 알림 기능

#### 카카오 소셜 로그인 및 회원가입

- OAuth2.0 기반 카카오 로그인 API 연동

### ✅ 메인 페이지(사진 카테고리 페이지)

#### Nav 컴포넌트

- location 객체를 활용한 커뮤니티 내 카테고리 메뉴 경로 이동에 따른 폰트 색 변경
- 페이지 스크롤 시, 메인 Nav 고정 기능(position: sticky 적용)
- localStorge 상의 access token 저장 여부에 따른 로그인/로그아웃 상태 변화

#### 페이지 헤더 슬라이더

##### 라이브러리(slick slider)를 활용한 슬라이더 구현

- 반응형으로 만들려고 했는데 라이브러리에서 height가 자동으로 지정이 되고 있었다. 개발자도구에서 보이는 클래스를 넣어서 height를 변경해도 수정되지 않는다. slide-list, slide-track 등 중간에 height를 작게 만드는 요소가 있는데 이들 변경이 되지 않는다.

##### react-responsive-carousel 라이브러리 사용

다른 라이브러리를 써봤다. 이것도 개발자도구에서 하나씩 height: 100%;주면 크기가 바뀌다가 img에는 height가 먹히지 않는다. !important를 주니까 먹힌다. 문제는 라이브러리 내부에서 height값을 넣을 엘리먼트를 찾아야하는데 그게 어렵다.

- node_module상의 코드를 수정해서 height를 변경하는데 성공했다. 변경 후 `npx patch-package <package name>`을 하면 된다. 하지만 어떤 height들은 css파일에서 찾을 수가 없었다. js로 높이변경을 하는 것 같은데 코드들이 너무 헷갈린다..
  아래 코드에서 첫번째 두번째 클래스의 height는 코드에서 쉽게 찾았으나 slider-wrapper의 높이는 어디서 지정하는지 찾지 못했다.
  <img width="353" alt="스크린샷 2021-08-02 오후 6 37 55" src="https://user-images.githubusercontent.com/60434382/127841694-cfde77e4-0d53-4214-a1b1-0bf0c0c3385f.png">

#### 컨텐츠 필터링 기능

#### 컨텐츠 card 기능

- 동적라우팅을 활용한 페이지 이동 구현(카테고리 페이지 -> 상세 페이지)
- 목데이터 활용 및 적용, 백엔드와 API 연결

#### 페이지네이션 기능

- 목데이터 적용, 백엔드와 API 연결

#### throttle을 적용한 GoToTop button 기능 구현

#### Footer 컴포넌트

### ✅ 사진 card component 상세 페이지

#### 댓글 추가 및 해당 이미지 삭제 기능 구현

#### 댓글 게시된 시간 계산하여 1분전, 2분전 등 표기 기능 구현

### ✅ 글쓰기 페이지

#### 글쓰기 기능 (사진 및 내용 업로드)

- 옵션값 미선택시, 해당 인풋창 보더 색 변경
- 옵션값 선택시, placeholder 검정으로 변경

#### 글쓰기 업로드 시, 메인페이지 내 사진 카테고리 페이지에 업데이트

#### 업로드된 컨텐츠 삭제 기능

## 데모 영상

- [유튜브 영상 링크](https://www.youtube.com/watch?v=yCrwiy9oFAQ)
