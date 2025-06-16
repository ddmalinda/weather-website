import MiniTitles from "../../../components/titles/MiniTItle";
import WrapSingleWeatherData from "./WrapSingleWeatherData";

type Props = {
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    vis_km: number;
    vis_miles: number;
    gust_mph: number;
    uv: number;
  };
}
export default function TodayWeather({ current }: Props) {
  return (
    <div className=' bg-white rounded-xl shadow-xl  md:flex max-sm:flex-col max-sm:mx-5 justify-around p-3 '>

      <WrapSingleWeatherData>
        <div>
          {/*weather*/}
          <p className='lg:text-4xl md:text-xl text-center flex font-poppins p-2'>{current.condition.text}</p>
          <img className='justify-center flex mx-auto' src={current.condition.icon} width="100px" height="100px" />
        </div>
      </WrapSingleWeatherData>
      <WrapSingleWeatherData>
        {/*temperature*/}
        <div>
          <div className="flex justify-center">
            <p className="lg:text-6xl md:text-4xl max-sm:text-6xl font-medium font-roboto  flex">{current.temp_c}</p>
            <p className="text-2xl">°C</p>
          </div>
          <p className="flex justify-center">feelslike {current.feelslike_c}</p>

          <div className="flex justify-center">
            <div className="flex">
              {current.heatindex_c}
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M450-180v-485.08L222.15-437.23 180-480l300-300 300 300-42.15 42.77L510-665.08V-180h-60Z" /></svg>
            </div>
            <div className="flex">
              {current.dewpoint_c}
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M450-780v485.08L222.15-522.77 180-480l300 300 300-300-42.15-42.77L510-294.92V-780h-60Z" /></svg>
            </div>
          </div>
        </div>
      </WrapSingleWeatherData>
      <WrapSingleWeatherData>
        <>
          {/*windspeed*/}
          <MiniTitles title="wind Speed" />
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16">
            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5" />
          </svg>
          <p className="text-xl font-medium font-roboto  flex">{current.wind_kph + "km/h"}</p>
        </>
      </WrapSingleWeatherData>

      <WrapSingleWeatherData>
        <>
          {/*Humidity*/}
          <MiniTitles title="humidity" />
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a29 29 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a29 29 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001zm0 0-.364-.343zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267" />
          </svg>
          <p className="text-xl font-medium font-roboto  flex">{current.humidity+ "%"}</p>
        </>
      </WrapSingleWeatherData>

      <WrapSingleWeatherData>
        <>
          {/*weather*/}
          
          <MiniTitles title="pressure" />
          <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/barometer-gauge.png" alt="barometer-gauge"/>
          <p className="text-xl font-medium font-roboto  flex">{current.pressure_mb+" hPa"}</p>
        </>
      </WrapSingleWeatherData>
      <WrapSingleWeatherData>
        <>
          {/*weather*/}
          
          <MiniTitles title="UV Index" />
         <svg  xmlns="http://www.w3.org/2000/svg"  width="80"  height="80"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 1 1 8 0" /><path d="M12 4v-1" /><path d="M13 16l2 5h1l2 -5" /><path d="M6 16v3a2 2 0 1 0 4 0v-3" /></svg>
          <p className="text-xl font-medium font-roboto  flex">{current.uv}</p>
        </>
      </WrapSingleWeatherData>

    </div>
  )
}
