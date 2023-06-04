import React from 'react';
import styled from 'styled-components';

import PageTitle from '../components/PageTitle/PageTitle';
import Highlight from '../components/Highlight/Highlight';

import { TempContent } from './tempContent';

const AboutText = styled.div`
  font-family: ${({ theme }) => theme.fonts.body};
`;

const About = () => {
  return (
    <div>
      <PageTitle>About Me</PageTitle>
      <AboutText>
        <p>
          <Highlight>Hey there!</Highlight> I'm Dmitry Filipovich, a Full Stack Developer and an IT enthusiast. My fascination with coding and tech
          solutions began as an IT Technician in 2019, building MySQL databases and C# applications.
        </p>
        <p>
          Fast forward to today, I've enjoyed varied experiences at a world-class corporation and as a freelance developer. At Intel, I thrived as an
          IT Team Leader and Software Developer, delivering impactful projects and pioneering efficiency improvement initiatives across global labs.
        </p>
        <p>
          My journey thus far has been a blend of independent and team-based projects. I've single-handedly launched an insurance industry website and
          collaborated on creating a high-performance virtual store. Each project, big or small, has fueled my passion for creating user-friendly,
          impactful digital solutions.
        </p>
        <p>
          In this ever-evolving field, I'm not just a developer, but an ardent problem solver. I look forward to every new challenge and the
          innovative solutions they spark.
        </p>
      </AboutText>
      <TempContent />
    </div>
  );
};

export default About;
