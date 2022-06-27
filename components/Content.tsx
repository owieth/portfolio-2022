import { Spacer, useTheme } from "@nextui-org/react"
import { Image } from "@nextui-org/react";
import styled from "styled-components";

const StyledImage = styled.div`
    height: 500;
    width: 500;
    align-items: center;
`;

export const Content = () => {
    const { type } = useTheme();

    return (
        <>
            <Spacer x={10} />
            <div>
            <h1 style={{
                fontFamily: 'EXCRATCH-Bold'
            }}>Hi, I`m Oli</h1>
            <h2>I design, create & build Stuff</h2>
            </div>
            <StyledImage>
                <Image src={type === 'dark' ? '/assets/oli_dark.png' : '/assets/oli_light.png'} alt={''} />
            </StyledImage>
        </>
    )
}