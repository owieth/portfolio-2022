import { Link, useTheme } from '@nextui-org/react';
import styled from 'styled-components';
import { Behance } from './icons/Behance';
import { Dribbble } from './icons/Dribbble';
import { Github } from "./icons/Github";
import { Line } from './icons/Line';
import { Twitter } from './icons/Twitter';

const Socials = () => {
  const { isDark } = useTheme();

  const StyledLink = styled.a(() => `
      color: ${isDark ? 'white' : 'black'};
    `
  );

  return (
    <>
      <StyledLink href="https://github.com/owieth" target="_blank"><Github /></StyledLink>
      <StyledLink href="https://dribbble.com/olivierwinkler/" target="_blank"><Dribbble /></StyledLink>
      <StyledLink href="https://www.behance.net/ortexhd" target="_blank"><Behance /></StyledLink>
      <StyledLink href="https://twitter.com/oli_eth" target="_blank"><Twitter /></StyledLink>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-left: 17.5px;
`;

export const Links = () => {
  return (
    <Container>
      <Line />
      <Socials />
      <Line />
    </Container>
  )
}