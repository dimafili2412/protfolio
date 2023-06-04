import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 20px;
  cursor: default;
`;

const Divider = styled.div`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.divider.primary};
  margin: auto 20px;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.header};
  font-weight: 700;
`;

const PageTitle = ({ children }) => {
  return (
    <TitleWrapper>
      <Title>{children}</Title>
      <Divider />
    </TitleWrapper>
  );
};

export default PageTitle;
