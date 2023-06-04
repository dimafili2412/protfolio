import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.text.accent};
`;

const Highlight = ({ children }) => {
  return <StyledSpan>{children}</StyledSpan>;
};

export default Highlight;
