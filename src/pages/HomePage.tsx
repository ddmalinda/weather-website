
import { useEffect, useState } from 'react'
import NavigationBar from '../components/navbar/NavigationBar'
import CurrentWeather from '../layouts/homepage/CurrentWeather'
import axios from 'axios'

export default function HomePage() {
  //hooks
  const [status, setStatus] = useState('notStarted')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null) //catch

  useEffect(() => {
    if ('notStarted' === status) {
      setStatus("Loading...")

      axios.get(`http://api.weatherapi.com/v1/current.json?key=157f642eb5f140ab8df154059251306&q=badulla&aqi=yes`)
        .then(response => {
          setData(response.data)
          console.log(response.data)
        })
        .catch(error => {
          setError(error)
        })
    }


  }, []);

  return (
    <div className='bg-gray-100 min-h-screen w-full'  >
      <NavigationBar />
      
      {error ? error : <>
        {data ? <CurrentWeather data={data} /> :
          <div className=' container flex min-h-screen justify-center items-center text-4xl  font-poppins  mx-auto '>
            <p className='animate-bounce'>{status}</p>
          </div>
        }
      </>
      }
    </div>
  )
}
