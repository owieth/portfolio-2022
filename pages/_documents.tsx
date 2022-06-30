import { CssBaseline } from '@nextui-org/react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export class MyDocument extends Document {
  static async getInitialProps(ctx: never) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles])
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {CssBaseline.flush()}

          <link
            rel="preload"
            href="/fonts/EXCRATCH-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/fonts/EXCRATCH-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="/fonts/EXCRATCH-Thin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
