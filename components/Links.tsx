import { Link, useTheme } from '@nextui-org/react';
import styled from 'styled-components';
import { Behance } from './icons/Behance';
import { Dribbble } from './icons/Dribbble';
import { Github } from "./icons/Github";
import { Line } from './icons/Line';
import { Twitter } from './icons/Twitter';

export const StyledLink = styled.a<{ isDark: boolean }>`
  color: ${({ isDark }) => isDark ? 'white' : 'black'};
`;

const Socials = () => {
  const { isDark } = useTheme();

  return (
    <>
      <StyledLink isDark={isDark!} href="https://github.com/owieth" target="_blank"><Github /></StyledLink>
      <StyledLink isDark={isDark!} href="https://dribbble.com/olivierwinkler/" target="_blank"><Dribbble /></StyledLink>
      <StyledLink isDark={isDark!} href="https://www.behance.net/ortexhd" target="_blank"><Behance /></StyledLink>
      <StyledLink isDark={isDark!} href="https://twitter.com/oli_eth" target="_blank"><Twitter /></StyledLink>
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