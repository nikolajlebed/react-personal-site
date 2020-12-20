import Document, { Html, Head, Main, NextScript } from 'next/document';
// Adapted from https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
import Header from '../components/Template/Header';
import Nav from '../components/Template/Nav';

const { GA_ID } = process.env;

/* eslint-disable react/no-danger */
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {GA_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
              gtag('config', '${GA_ID}', { page_path: window.location.pathname });`,
                }}
              />
            </>
          )}
          <link
            href="//fonts.googleapis.com/css?family=Source+Sans+Pro:400,700|Raleway:400,800,900"
            rel="stylesheet"
            async
          />
        </Head>
        <body>
          <div id="wrapper">
            <Header />
            <div id="main">
              <Main />
            </div>
            <Nav />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
/* eslint-enable react/no-danger */

export default MyDocument;
