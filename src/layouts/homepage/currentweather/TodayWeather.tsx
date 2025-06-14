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
    <div className=' bg-white rounded-xl shadow-xl md:flex md:justify-around p-3 '>
      <WrapSingleWeatherData>
        <>
          <p className='text-4xl justify-center flex font-poppins p-2'>{current.condition.text}</p>
          <img className='justify-center flex mx-auto' src={current.condition.icon} width="100px" height="100px" />
        </>
      </WrapSingleWeatherData>
      <WrapSingleWeatherData>
     <div>
        <div className="flex justify-center">
        <p className="text-6xl font-medium font-roboto  flex">{current.temp_c}</p>
        <p className="text-2xl">°C</p>
        </div>
          <p className="flex justify-center">feelslike {current.feelslike_c}</p>

          <div className="flex justify-center">
          <div className="flex">
            {current.heatindex_c}
            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M450-180v-485.08L222.15-437.23 180-480l300-300 300 300-42.15 42.77L510-665.08V-180h-60Z"/></svg>
          </div>
          <div className="flex">
            {current.dewpoint_c}
           <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M450-780v485.08L222.15-522.77 180-480l300 300 300-300-42.15-42.77L510-294.92V-780h-60Z"/></svg>
          </div>
          </div>
     </div>
      </WrapSingleWeatherData>
      <WrapSingleWeatherData>
        <>
          <p className="text-6xl font-medium font-roboto  flex">{current.wind_kph}</p>
         
        <MiniTitles title="wind Speed"/>

          
        </>
      </WrapSingleWeatherData>
      <WrapSingleWeatherData>
        <>
          humidity
        </>
      </WrapSingleWeatherData>
      <WrapSingleWeatherData>
        <>
          pressure_mb
        </>
      </WrapSingleWeatherData>
      <WrapSingleWeatherData>
        <>
          
        </>
      </WrapSingleWeatherData>
    </div>
  )
}
