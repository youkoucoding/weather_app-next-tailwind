import Head from 'next/head';

export default function Home({ weather }) {
  return (
    <div>
      <Head>
        <title>WeatherApp</title>
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap'
          rel='stylesheet'
        ></link>
        <meta charSet='utf-8' />
        <meta
          name='viewpoint'
          content='"width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Head>

      <div className='container justify-items-center'>
        <header className='justify-items-center'>what's this</header>
        <p className='container py-3 mx-3 bg-footer-texture shadow-lg text-gray-800 max-w-5xl font-maru text-lg'>
          伊豆諸島では強風や高波に
          {weather.description.text}
          <div className='flex justify-items-center font-maru text-gray-700 text-center'>
            {weather.location.city}
            {weather.description.publicTime}
            <img src={weather.copyright.image.url} alt='' />
          </div>
        </p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const res = await fetch(
      'https://weather.tsukumijima.net/api/forecast?city=130011'
    );
    const weather = await res.json();
    return {
      props: {
        weather,
      },
    };
  } catch (err) {
    console.error(err);
  }
}
