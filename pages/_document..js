import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    // Getting styled-components css
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    console.log("hi");
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          {/* Favicon and icons */}
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/static/favicon-16x16.png"
            sizes="16x16"
          />
          {/* Manifest */}
          <link rel="manifest" href="/static/manifest.json" />
          {/* Styles-components css */}
          {this.props.styleTags}
          {/* Mobile meta tags */}
          <meta name="viewport" content="width=device-width" />
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
      </html>
    );
  }
}
