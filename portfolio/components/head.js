import Head from 'next/head';
import Script from 'next/script';

function PageHead({ title, description }) {
  return (
    <>
    <Head>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Script src="https://use.fontawesome.com/e073950383.js" strategy="lazyOnload" />
    </>
  );
}

export default PageHead;
