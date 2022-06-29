import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components';

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
      <Component {...pageProps} />
    </NextUIProvider>
  </NextThemesProvider>
  )
}

export default App
