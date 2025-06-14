import MainTitles from "../../components/titles/MainTitles";
import SubTitles from "../../components/titles/SubTitles";
import TodayData from "./currentweather/TodayData";

type Props = {
    data: {
        location: {
            name: string;
            region: string;
            country: string;
            lat: number;
            lon: number;
            tz_id: string;
            localtime_epoch: number;
            localtime: string;
        };
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
            gust_kph: number;
            uv: number;
        };
    }
}
export default function CurrentWeather({ data }: Props) {
    return (
        <div className="container justify-center items-center mx-auto my-10 space-y-2">
            <div className="flex items-end gap-2">
                <MainTitles title={data.location.name} />
                
                <SubTitles title={'('+data.location.localtime } />
                <SubTitles title={data.location.country+')'} />
                
            </div>
            <div>

            <TodayData condition={data.current.condition}/>
            </div>

        </div>
    )
}
