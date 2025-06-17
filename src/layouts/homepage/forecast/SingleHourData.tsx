type Props = {
  
        time: string;
        condition: {
            text: string;
            icon: string;
        };
        temp:string;
 
}

export default function SingleHourData({time,condition,temp}: Props) {

    return (
        <div className="flex flex-col gap-3 text-center">
            <p className='lg:text-xs   font-poppins p-2'>{time.split(" ")[1]}</p>
            <img className='justify-center flex mx-auto' src={condition.icon} width="60px" height="60px" />
            <div className="flex flex-row text-center  font-poppins p-2 gap-1">
            <p className=''>{temp}</p>
            <p>°C</p>
            </div>
        </div>
    )
}