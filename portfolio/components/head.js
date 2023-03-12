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
    </Head>
  );
}

export default PageHead;
