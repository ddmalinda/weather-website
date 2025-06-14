import React from 'react'

type Props={
    condition: {
                text: string;
                icon: string;
                code: number;
            };
}
export default function TodayData({condition}:Props) {
  return (
    <div className=' bg-white p-3 rounded-2xl shadow-xl flex gap-2'>
    <div className='md:w-2/12 border border-gray-200 rounded-2xl p-2 m-5'>
        <p className='text-4xl justify-center flex font-poppins  upp p-2'>{condition.text}</p>
        <img className='justify-center flex mx-auto' src={condition.icon} width="100px" height="100px"/>
    </div>
    <div>

    </div>
    </div>
  )
}
