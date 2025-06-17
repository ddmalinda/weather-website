import BigTitles from "../../components/titles/BigTIlte";
import MainTitles from "../../components/titles/MainTitles";
import SubTitles from "../../components/titles/SubTitles";
import getDayName from "../../util/functions";
import SingleForecastDay from "./forecast/SingleForecastDay";

type Props = {
    data: {
        forecast: {
            forecastday: [
                {
                    date: string;
                    hour: [
                        {
                            time: string;
                            condition: {
                                text: string;
                                icon: string;
                            };
                            temp_c: string;
                        }
                    ]
                    day: {
                        condition: {
                            text: string;
                            icon: string;
                        };
                    }
                }
            ]
        }
    };
}



export default function Forecast({ data }: Props) {
    console.log(data)
    return (
        <div className="container justify-center items-center mx-auto space-y-5">
            <div className="m-5">
            <BigTitles title="Forecast"   />
            </div>
            <div className="">
                {data.forecast.forecastday.map((val, key) => {
                    return (
                        <div className="mb-10 bg-white  p-5 rounded-2xl max-md:flex-col mx-5 shadow-2xl">
                            <div className="flex flex-row gap-2 items-end mb-2">
                                <MainTitles title={getDayName(val.date)} />
                                <SubTitles title={val.date} />
                            </div>
                            <div className="flex flex-row gap-x-4 justify-around max-md:flex-col  gap-5">
                            <div className="flex-col flex  rounded-2xl border-gray-500 border lg:w-7/50 max-md:w-auto max-md:mx-5 py-5 ">
                                <p className='lg:text-2xl md:xl max-sm:text-xl text-center justify-center flex font-poppins p-2'>{val.day.condition.text}</p>
                                <img className='justify-center flex mx-auto' src={val.day.condition.icon} width="100px" height="100px" />
                            </div>
                            <div key={key} className="border rounded-2xl border-gray-500 lg:w-42/50 md:w-42/50  max-md:mx-5   p-3">
                                <SingleForecastDay date={val.date} hour={val.hour} />
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}