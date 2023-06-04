import React from 'react';
import styled, { keyframes } from 'styled-components';

import useHashText from '../../hooks/useHashText';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const HexagonContainer = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
`;

const Hexagon = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  ${HexagonContainer}:hover & {
    animation: ${spin} 2s linear infinite;
  }
`;

const InnerHexagon = styled.polygon`
  stroke: ${({ theme }) => theme.colors.text.accent};
  stroke-width: 5px;
`;

const LogoText = styled.span`
  color: ${({ theme }) => theme.colors.text.accent};
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  fill: ${({ theme }) => theme.colors.text.primary};
  text-anchor: middle;
  position: relative;
`;

const Logo = () => {
  const hashText = useHashText();
  const handleClick = () => {
    hashText('home', true);
  };
  return (
    <HexagonContainer onClick={handleClick}>
      <Hexagon viewBox="0 0 100 100">
        <InnerHexagon points="50 1 95 25 95 75 50 99 5 75 5 25" />
      </Hexagon>
      <LogoText x="50%" y="50%">
        DF
      </LogoText>
    </HexagonContainer>
  );
};

export default Logo;
