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
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link type="text/plain" rel="author" href="humans.txt" />
          <link rel="manifest" href="manifest.webmanifest" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lekton" />
          <link rel="apple-touch-icon" href="favicon.ico"/>
          <title>JD Hernandez</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lekton" />
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
