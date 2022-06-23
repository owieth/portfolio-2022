import { Grid } from '@nextui-org/react';
import { NextPage } from 'next';
import { Navigation } from '../components/Navigation';

const Home: NextPage = () => {
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={6}></Grid>
      <Grid xs={4}>
        <Navigation />
      </Grid>
    </Grid.Container>
  )
}

export default Home
