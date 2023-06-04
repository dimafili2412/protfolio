import React from 'react';
import styled from 'styled-components';

const Link = styled.div`
  padding: 10px 20px;
  margin: 0 10px;
  border: 1px solid ${({ theme }) => theme.colors.text.accent};
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.text.accent};
  font-family: ${({ theme }) => theme.fonts.header};
  transition: transform 0.2s linear;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.highlight};
  }
`;

const ResumeLink = () => {
  const handleClick = () => {
    console.log('resume click');
  };
  return <Link onClick={handleClick}>Resume</Link>;
};

export default ResumeLink;
