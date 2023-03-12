import Head from 'next/head';

function PageHead({ title, description }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="style.css" />
      <script src="script.js" defer></script>
      <script src="https://use.fontawesome.com/e073950383.js"></script>
      <link href="https://use.fontawesome.com/e073950383.css" media="all" rel="stylesheet"></link>
    </Head>
  );
}

export default PageHead;
