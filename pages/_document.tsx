import Document, { DocumentContext, Head, Main, NextScript, Html } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          // eslint-disable-next-line react/display-name
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          {/* Favicon and icons */}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/favicon-16x16.png"
            sizes="16x16"
          />
          {/* Manifest */}
          <link rel="manifest" href="/static/manifest.json" />
          {/* Mobile meta tags */}
          <meta name="theme-color" content="#000000" />
        </Head>
        <body>
          {/* Main */}
          <Main />
          <NextScript />
          {/* Fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:100,400&display=swap"
            rel="stylesheet"
          />
        </body>
      </Html>
    );
  }
}
