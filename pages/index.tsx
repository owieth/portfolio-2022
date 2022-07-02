import { Container, Grid, Spacer } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { Content } from '../components/Content';
import { Links } from '../components/Links';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';
import { Images } from '../constants/images';

const StyledGrid = styled.div`
  display: grid;
  gap: 50px;

  @media (min-width: 961px) {
    grid-auto-flow: column;
    grid-template-columns: 100px auto 400px;
  }
  
  @media (max-width: 960px) {
    grid-auto-flow: row;
    grid-template-rows: auto;
  }
`;

const StyledLinks = styled(Links)`
  @media (min-width: 961px) {
    grid-column: 1;
  }
  
  @media (max-width: 960px) {
    grid-row: 2;

  }
`;

const StyledContent = styled(Content)`
  @media (min-width: 961px) {
    grid-column: 2;
  }
  
  @media (max-width: 960px) {
    grid-row: 1;

  }
`;

const Home: NextPage = () => {
  return (
    <Container gap={5} data-scroll-section data-scroll-speed="6">
      <Grid.Container gap={2} justify="space-between" alignItems="center" css={{ height: 'max-content' }}>
        <Grid>
          <Logo width={100} height={100}/>
        </Grid>
        <Grid><Navigation /></Grid>
      </Grid.Container>

      <StyledGrid>
          <StyledLinks />
          <StyledContent />
      </StyledGrid>

      <Spacer y={10} />
      <h1>Work</h1>

      <Spacer y={10} />
      <h1>Portfolio</h1>

      <motion.div style={{ height: '100%'}}>
        {Images.map((image) => {
            return <Image src={image} key={image} alt={''} height={500} width={400} objectFit={'cover'}/>
        })}
      </motion.div>
    </Container>
  )
}

export default Home
