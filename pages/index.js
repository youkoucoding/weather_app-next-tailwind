import Head from 'next/head';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>WeatherApp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex p-5">
        <h1 className="flex p-1">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="flex-1">
          Get started by editing{' '}
          <code className="flex-1">pages/index.js</code>
        </p>

        <div className="flex-1">
          <a href="https://nextjs.org/docs" className="flex-1">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </main>

      <footer className="flex-1">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/" alt="Logo" className="flex-auto" />
        </a>
      </footer>
    </div>
  );
}
