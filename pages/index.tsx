import { Container, Grid, useTheme } from '@nextui-org/react';
import { NextPage } from 'next';
import { Links } from '../components/Links';
import { Navigation } from '../components/Navigation';
import { Image } from "@nextui-org/react";

const Home: NextPage = () => { 
  const { type, isDark } = useTheme();

  return (
    <Container gap={10} display={'flex'}>
      <Grid.Container gap={2} justify="center">
        <Grid xs={6}></Grid>
        <Grid>
          <Navigation />
        </Grid>
        <Grid xs={2}></Grid>
      </Grid.Container>

      <Links />

      <h1 style={{
          fontFamily: 'EXCRATCH-Bold'
      }}>Hi <Image src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" height={75} width={75} alt={''}/>, I`m Oli</h1>

      <Image src={type === 'dark' ? '/assets/oli_dark.png' : '/assets/oli_light.png'} height={500} width={500} alt={''}/>
    </Container>
  )
}

export default Home
