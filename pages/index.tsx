import { Container, Grid } from '@nextui-org/react';
import { NextPage } from 'next';
import { Content } from '../components/Content';
import { Links } from '../components/Links';
import { Logo } from '../components/Logo';
import { Navigation } from '../components/Navigation';

const Home: NextPage = () => {
  return (
    <Container gap={10} style={{ height: '1000vh' }} data-scroll-section data-scroll-speed="4" >
      <Grid.Container gap={2} justify="space-between" alignItems="center" css={{ height: 'max-content' }}>
        <Grid>
          <Logo width={100} height={100}/>
        </Grid>
        <Grid><Navigation /></Grid>
      </Grid.Container>

      <Grid.Container gap={2} justify="center">
        <Grid xs={1}>
          <Links />
        </Grid>
        <Grid xs={11}>
          <Content />
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export default Home
