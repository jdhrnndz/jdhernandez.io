import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {

    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lekton" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="apple-touch-icon" href="/favicon.ico"/>
          <link type="text/plain" rel="author" href="/humans.txt" />
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
