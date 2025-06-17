import SingleHourData from "./SingleHourData";
type Props = {
    date: string;
    hour: [{
         time: string;
        condition: {
            text: string;
            icon: string;
        };
        temp_c:string;
    }]
}

export default function SingleForecastDay({ hour }: Props) {
    return (
        <div >
       
        <div className="flex mx-auto flex-row overflow-x-auto gap-10">
        {hour.map((val,key)=>{
            return(
                <div key={key}  >
                   <SingleHourData condition={val.condition} time={val.time} temp={val.temp_c}/>
                </div>
            )
        })}
        </div>
        </div>
    )
}