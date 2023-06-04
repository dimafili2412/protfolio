import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectAddressParameter } from '../../features/address/addressSlice';

import useHashText from '../../hooks/useHashText';

const Link = styled.div`
  padding: 5px 10px;
  margin: 5px 10px;
  font-size: 1.1rem;
  font-family: ${({ theme }) => theme.fonts.header};
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  /* transition: color 0.5s linear; */
  &:hover {
    color: ${({ theme }) => theme.colors.text.accent};
    //text-decoration: underline;
  }
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.text.accent};
      text-decoration: underline;
    `}
`;

const NavBarLink = ({ children, to }) => {
  const hashText = useHashText();
  const addressParameter = useSelector(selectAddressParameter);
  const handleClick = () => {
    hashText(to || 'home', true);
  };
  return (
    <Link onClick={handleClick} active={false /*addressParameter === to*/}>
      {children}
    </Link>
  );
};

export default NavBarLink;
