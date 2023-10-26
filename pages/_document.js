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
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,400;0,700;0,800;1,400;1,700&family=Lekton:wght@400;700&display=swap" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <link rel="apple-touch-icon" href="/favicon.ico"/>
          <link type="text/plain" rel="author" href="/humans.txt" />
          <title>JD Hernandez</title>
          <meta name="description" content="JD Hernandez's website for displaying skills, projects, and other links to his profiles and a contact form." />
          <meta name="theme-color" content="rgb(47, 132, 124)" />
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
