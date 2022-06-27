import { Container, Grid, Image } from '@nextui-org/react';
import { NextPage } from 'next';
import { Content } from '../components/Content';
import { Links } from '../components/Links';
import { Navigation } from '../components/Navigation';

const Home: NextPage = () => {
  return (
    <Container gap={10} style={{ height: '100vh' }}>
      <Grid.Container gap={2} justify="space-between" alignItems="center" css={{ height: 'max-content' }}>
        <Grid><Image src="/assets/logo.png" height={100} width={100} alt={''} /></Grid>
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
