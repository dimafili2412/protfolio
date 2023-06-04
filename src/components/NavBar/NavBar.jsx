import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import NavBarLink from './NavBarLink';
import ResumeLink from './ResumeLink';

const links = [
  <NavBarLink key={`about-nav-link`} to="about">
    About
  </NavBarLink>,
  <NavBarLink key={`experience-nav-link`} to="experience">
    Experience
  </NavBarLink>,
  <NavBarLink key={`projects-nav-link`} to="projects">
    Projects
  </NavBarLink>,
  <NavBarLink key={`contact-nav-link`} to="contact">
    Contact
  </NavBarLink>,
  <ResumeLink key={`resume-nav-link`} />,
];

const NavBar = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  transition: top 0.3s;
  top: ${(props) => (props.isHidden ? '-5.1rem' : '0')};
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.background.primaryTransparent};
  backdrop-filter: blur(5px);
`;

const DesktopNav = styled.div`
  display: inline-flex;
  margin: 0 20px 0 auto;
`;

const NavBarComponent = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <NavBar isHidden={isHidden}>
      <Logo />
      <DesktopNav>{links}</DesktopNav>
    </NavBar>
  );
};

export default NavBarComponent;
