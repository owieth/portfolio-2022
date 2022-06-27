import styled from 'styled-components';
import { Behance } from './icons/Behance';
import { Dribbble } from './icons/Dribbble';
import { Github } from "./icons/Github";
import { Line } from './icons/Line';

const Socials = () => {
  return (
    <>
      <Github />
      <Dribbble />
      <Behance />
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
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