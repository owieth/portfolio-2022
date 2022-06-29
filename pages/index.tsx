import { Container, Grid, Image, useTheme } from '@nextui-org/react';
import { NextPage } from 'next';
import { Content } from '../components/Content';
import { Links } from '../components/Links';
import { Navigation } from '../components/Navigation';

const Home: NextPage = () => {
  const { type } = useTheme();
  
  return (
    <Container gap={10} style={{ height: '100vh' }}>
      <Grid.Container gap={2} justify="space-between" alignItems="center" css={{ height: 'max-content' }}>
        <Grid>
          <svg viewBox="0 0 1000 200" style={{ width: '200px', height: '200px'}}>
            <defs>
              <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="textcircle">
                <animateTransform
                  attributeName="transform"
                  begin="0s"
                  dur="30s"
                  type="rotate"
                  from="0 250 250"
                  to="360 250 250"
                  repeatCount="indefinite"
                />
              </path>
            </defs>
            <text dy="70" textLength="1220">
              <textPath xlinkHref="#textcircle" style={{
                fontSize: '48px',
                fontFamily:  'EXCRATCH-Thin',
                fill: type == 'dark' ? 'white' : 'black',               
              }}>Olivier • Winkler •</textPath>
            </text>
          </svg>
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
