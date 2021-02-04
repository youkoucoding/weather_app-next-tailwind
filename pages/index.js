import Head from 'next/head';

export default function Home({ weather }) {

  return (
    <div className="py-7">
      <Head>
        <title>WeatherApp</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Yusei+Magic&display=swap" rel="stylesheet"></link>
      </Head>

      <div>
        <p className="font-serif text-lg  font-maru text-green-300">this is a joke!</p>
        <p className="container mx-auto shadow-lg  bg-red-300 font-maru text-green-600 text-lg">
          伊豆諸島では強風や高波に
          {weather.description.text}
          <div className='flex justify-items-center font-maru text-gray-700 text-center'>{weather.location.city}</div>
        </p>
      </div>
    </div >
  );
}


export async function getStaticProps() {
  try {
    const res = await fetch('https://weather.tsukumijima.net/api/forecast?city=130011');
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