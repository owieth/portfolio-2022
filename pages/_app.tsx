import { createTheme, NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { AppProps } from 'next/app'
import { createGlobalStyle } from 'styled-components';

const lightTheme = createTheme({
  type: 'light',
  theme: {
  }
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {
  }
})

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'EXCRATCH-Bold';
    src: url('/fonts/EXCRATCH-Bold.woff') format('woff');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  /* @font-face {
    font-family: 'ProximaNova-Bold';
    src: url('/fonts/ProximaNova-Bold.woff') format('woff');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  } */
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
