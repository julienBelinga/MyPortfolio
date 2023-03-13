import Head from 'next/head'

function PageHead({ title, description }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="https://use.fontawesome.com/e073950383.js" strategy="lazyOnload" />
      <style dangerouslySetInnerHTML={{ __html: "@import url('https://use.fontawesome.com/e073950383.css')" }} />
    </Head>
  );
}

export default PageHead;
