import { Image } from "@nextui-org/react";
import styled from 'styled-components';
import { Github } from "./icons/Github";


const Line = styled.div`
    width: 2px;
    height: 200px;
    background-color: white;
`;

const Socials = () => {
    return (
        <>
            <Github />
        </>
    )
}

export const Links = () => {

  return (
    <div style={{ width: '100px'}}>
        <Line></Line>
        <Socials />
        <Line></Line>
    </div>
  )
}