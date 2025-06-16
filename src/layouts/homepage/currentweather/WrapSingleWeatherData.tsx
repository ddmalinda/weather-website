import  { type ReactElement } from 'react'

type Props = {
    children:ReactElement;
}

export default function WrapSingleWeatherData({children}: Props) {
  return (
   <div className=' border md:w-1/5 max-sm:mx-3 border-gray-200 flex items-center justify-center flex-col rounded-2xl p-2 m-2  gap-2'>
    {children}
        </div>
  )
}