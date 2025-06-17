
import { useEffect, useState } from 'react'
import NavigationBar from '../components/navbar/NavigationBar'
import CurrentWeather from '../layouts/homepage/CurrentWeather'
import axios from 'axios'
import Forecast from '../layouts/homepage/Forecast';

const API_KEY = import.meta.env.VITE_API_KEY;
export default function HomePage() {
  //hooks
  const [status, setStatus] = useState('notStarted')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [currentLocation, SetCurrentLocation] = useState('')

  useEffect(() => {
    if ('enterd' === status) {
      setStatus("Loading...")
      try {
        axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${currentLocation}&days=7&aqi=no&alerts=no`)
          .then(response => {
            setData(response.data)
            setStatus("completed")
          })
          .catch(error => {
            setError(error)
          })
      } catch (e) {
        console.log(e)
      }
    }


  }, [currentLocation]);
  return (
    <div className='bg-gray-100 min-h-screen w-full'  >
      <NavigationBar currentLocation={currentLocation} SetCurrentLocation={SetCurrentLocation} setStatus={setStatus} API_KEY={API_KEY} />

      {error ? (
        <div className="container flex min-h-screen justify-center items-center text-2xl font-poppins mx-auto text-red-500">
          <p>{error}</p>
        </div>
      ) : <>
        {data ?
          <div>
            <CurrentWeather data={data} />
            <Forecast data={data}/>
          </div>
          : (status === 'notStarted') ?
            <div className='animate-pulse container flex min-h-screen justify-center items-center md:text-8xl md:flex-row sm:flex-col sm:text-4xl text-balance text-gray-500  font-poppins  mx-auto '>
              <svg xmlns="http://www.w3.org/2000/svg" height="300px" viewBox="0 -960 960 960" width="300px" fill="#155dfc"><path d="M794-96 525.79-364q-29.79 22.92-68.25 35.96T373.44-315q-115.31 0-193.88-78.7Q101-472.41 101-585.2q0-112.8 78.7-191.3Q258.41-855 371.2-855q112.8 0 191.3 78.64Q641-697.71 641-584.85q0 45.85-13 83.35-13 37.5-38 71.5l270 268-66 66ZM371.44-406q75.99 0 127.27-51.54Q550-509.08 550-584.59q0-75.5-51.35-127.46Q447.31-764 371.53-764q-76.61 0-128.07 51.95Q192-660.09 192-584.59q0 75.51 51.31 127.05Q294.62-406 371.44-406Z" /></svg>

              <p className=''>Pleace Enter Location On search bar</p>
            </div>
            :
            <div className=' container flex min-h-screen justify-center items-center text-4xl  font-poppins  mx-auto '>
              <p className='animate-bounce'>{status}</p>
            </div>
        }
      </>
      }
    </div>
  )
}
