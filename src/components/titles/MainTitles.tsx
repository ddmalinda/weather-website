
type Props={
    title:string
}
export default function MainTitles({title}:Props) {

  return (
    <div>
        <h2 className='flex gap-1 text-3xl items-end text-gray-500 font-poppins uppercase'>
            {title}
        </h2>
    </div>
  )
}
