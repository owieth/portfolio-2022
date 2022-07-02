import { Container, Grid, Spacer } from '@nextui-org/react';
import 'atropos/css';
import Atropos from 'atropos/react';
import { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
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

const StyledImage = styled(Image)`
  border-radius: 20px;
`;

const Home: NextPage = () => {
  return (
    <Container gap={5} data-scroll-section data-scroll-speed="6">
      <Grid.Container gap={2} justify="space-between" alignItems="center" css={{ height: 'max-content' }}>
        <Grid>
          <Logo width={100} height={100} />
        </Grid>
        <Grid><Navigation /></Grid>
      </Grid.Container>

      <StyledGrid>
        <StyledLinks />
        <StyledContent />
      </StyledGrid>

      <Spacer y={10} />
      <h1>Work</h1>
      <h2>Stuff I've built</h2>

      <Spacer y={10} />
      <h1>Portfolio</h1>
      <h2>Stuff I've shoot</h2>

      <script async src="https://lens.xyz/widgets.js"></script>
      <link rel="stylesheet" href="https://lens.xyz/widget-styles.css" />


      <Swiper
        style={{
          width: '100%',
          height: '100%'
        }}
        spaceBetween={100}
        slidesPerView={3}
        grabCursor={true}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >

        {Images.map((image) => {
          return <SwiperSlide>
            <Atropos>
              <StyledImage src={image} data-atropos-offset="-5" alt={''} height={500} width={400} objectFit={'cover'} />
            </Atropos>
          </SwiperSlide>
        })}
      </Swiper>
    </Container>
  )
}

export default Home
