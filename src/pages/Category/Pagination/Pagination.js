import React from 'react';
import PageLi from './PageLi';
import styled from 'styled-components/macro';

function Pagination({ totalPageNumber, paginate, fetchCardData, currentPage }) {
  const pageNumberList = new Array(totalPageNumber)
    .fill()
    .map((_, idx) => idx + 1);

  return (
    <div>
      <PageUl>
        {pageNumberList.map(num => (
          <PageLi
            key={num}
            num={num}
            paginate={paginate}
            fetchCardData={fetchCardData}
            currentPage={currentPage}
          />
        ))}
      </PageUl>
    </div>
  );
}

const PageUl = styled.ul`
  display: flex;
  justify-content: center;
  margin: 50px 0 100px;
  font-size: 20px;
  text-align: center;
  line-height: 2;
`;

export default Pagination;
