import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static getInitialProps(ctx) {
    return Document.getInitialProps(ctx);
  }
  render() {
    return (
      <Html>
        <Head>
          {/* The following script runs before paint & hydration */}
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src="./before-paint.js" />
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
