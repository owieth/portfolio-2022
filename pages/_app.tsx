import { Container, createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { AppProps } from 'next/app'
import { useEffect, useRef, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Logo } from '../components/Logo';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRouter } from 'next/router';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'EXCRATCH-Bold';
      src: url('/fonts/EXCRATCH-Bold.woff2') format('woff2');
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }

    @font-face {
      font-family: 'EXCRATCH-Regular';
      src: url('/fonts/EXCRATCH-Regular.woff2') format('woff2');
      font-style: normal;
      font-weight: 200;
      font-display: swap;
    }

    @font-face {
      font-family: 'EXCRATCH-Thin';
      src: url('/fonts/EXCRATCH-Thin.woff2') format('woff2');
      font-style: normal;
      font-weight: 100;
      font-display: swap;
    }

    h1 {
      font-family: 'EXCRATCH-Bold';
      letter-spacing: 5px;
    }

    h2 {
      font-family: 'EXCRATCH-Thin';
      font-size: 24px;
      letter-spacing: 1px;
    }

    a {
      font-family: 'EXCRATCH-Thin';
    }
`;

function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null)
  const { asPath } = useRouter();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  })

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className
      }}
    >
      <NextUIProvider>
        <GlobalStyle />
        {!loading ? (
          <LocomotiveScrollProvider
            options={{
              smooth: true,
              // ... all available Locomotive Scroll instance options
            }}
            watch={
              [
                //..all the dependencies you want to watch to update the scroll.
                //  Basicaly, you would want to watch page/location changes
                //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
              ]
            }
            location={asPath}
            //onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
            containerRef={containerRef}
          >
            <div data-scroll-container ref={containerRef}>
              <Component {...pageProps} />;
            </div>
          </LocomotiveScrollProvider>
        ) : (
          <Container style={{ height: '100vh' }} display="flex" justify="center" alignItems="center">
            <Logo width={700} height={700} />
          </Container>
        )}
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default App