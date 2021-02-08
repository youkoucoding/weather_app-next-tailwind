import Head from 'next/head';
import Header from '../components/Header';

export async function getStaticProps() {

  // const baseUrlAPI = "http://api.weatherstack.com/";
  // const typeRequest = "current";
  // const keyWeatherStack = "456505a9d3924ff286e99ef678d0071b";
  // const accessKey = "?access_key=" + keyWeatherStack;
  // const querySearch = "&query=" + "Tokyo";
  // const request =
  //   baseUrlAPI + typeRequest + accessKey + querySearch + "&forecast_days=3";
  try {
    const res = await fetch('https://weather.tsukumijima.net/api/forecast?city=130011', { mode: "cors" });
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

export default function Home({ weather }) {
  return (
    <>
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
      <Header />

      <body className='bg-gray-300 w-full min-h-screen pt-30 md:pt-50 pb-6 px-2 py-8 md:px-10 font-mono '>
        <main
          className='bg-white max-w-5xl mx-auto md:p-12 my-10 rounded-lg shadow-2xl'>
          <section>
            <h3 class="font-bold text-2xl text-center">Weather Report Of {" "}{weather.title}</h3>
          </section>

          <section class="mt-10 rounded-2xl">
            <div className='grid justify-items-stretch py-30 mx-30 bg-footer-texture bg-green-100 rounded-lg shadow-2xl text-gray-800 max-w-5xl text-lg'>
              <div className='flex flex-wrap justify-center font-lg text-gray-700 mb-5 text-center'>
                <div className="grid justify-items-stretch justify-center">{weather.forecasts.map((item, index) => {
                  return (
                    <div key={index} className="font-bold mt-6 flex items-center justify-between rounded-lg px-5 bg-green-500">
                      <div className="px-8">{item.date}</div>
                      <div className="px-8">{item.dateLabel}</div>
                      <div className="px-8">{item.telop}</div>
                      <img src={item.image.url} alt='' className="flex justify-end px-8" />
                      <div className="px-8">降水確率：{item.chanceOfRain.T18_24}</div>
                    </div>
                  );
                })}</div>
              </div>
            </div>
          </section>
        </main>
        <p className="mb-20 mt-6 mx-auto text-w text-lg w-400 text-gray-600 text-center">
          <div className="flex flex-row justify-center m-4">{weather.copyright.title}</div>
          <div className="flex flex-row justify-center m-4">{weather.copyright.provider.map((item, index) => (<div key={index}>{" "}{item.name}</div>))}</div>
        </p>
      </body>
    </>
  );
}


