import { Image, useTheme } from "@nextui-org/react";
import styled from "styled-components";

const Position = styled.div`
    align-self: center;
    margin: 0 0 250px 0;
`;

export const Content = () => {
  const { type } = useTheme();

  return (
    <>
      <Position>
        <h1>Hi, I`m Oli</h1>
        <h2>I design, create & build Stuff</h2>
      </Position>

      <Image src={type === 'dark' ? '/assets/oli_dark.png' : '/assets/oli_light.png'} alt={''} height={750} width={750} />
    </>
  )
}