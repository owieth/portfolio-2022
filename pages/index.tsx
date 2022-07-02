import { Container, Grid, Spacer } from '@nextui-org/react';
import 'atropos/css';
import Atropos from 'atropos/react';
import { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyledCard } from '../components/Card';
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

      <Grid.Container gap={2} justify="center">
        <Grid xs={12} sm={4}>
          <Atropos style={{ height: '340px', width: '100%' }}>
            <StyledCard heading={"f"} description={""} image={"/assets/images/jureko1.jpg"} />
          </Atropos>
        </Grid>
        <Grid xs={12} sm={4}>
          <Atropos style={{ height: '340px', width: '100%' }}>
            <StyledCard heading={"f"} description={""} image={"/assets/images/jureko2.jpg"} />
          </Atropos>

        </Grid>
        <Grid xs={12} sm={4}>
          <Atropos style={{ height: '340px', width: '100%' }}>
            <StyledCard heading={"f"} description={""} image={"/assets/images/jureko3.jpg"} />
          </Atropos>

        </Grid>
        <Grid xs={12} sm={5}>
          <Atropos style={{ height: '400px', width: '100%' }}>
            <StyledCard heading={"JT 2022 Admin"} description={"Admindashboard JT 2022 App"} image={"/assets/images/admin.jpg"} />
          </Atropos>

        </Grid>
        <Grid xs={12} sm={7}>
          <Atropos style={{ height: '400px', width: '100%' }}>
            <StyledCard heading={"JT 2022 App"} description={"Tailormade App for JT 2022"} image={"/assets/images/app.jpg"} />
          </Atropos>

        </Grid>
      </Grid.Container>

      <Spacer y={10} />
      <h1>Portfolio</h1>
      <h2>Stuff I've shoot</h2>

      <Swiper
        style={{
          width: '100%',
          height: '100%'
        }}
        spaceBetween={100}
        slidesPerView={3}
        grabCursor={true}
        loop={true}
      >
        {Images.map((image, index) => {
          return <SwiperSlide key={index}>
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
