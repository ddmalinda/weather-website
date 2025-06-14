
type Props={
    title:string
}
export default function SubTitles({title}:Props) {

  return (
    <div>
        <h3 className='flex gap-1 text-sm items-end font-poppins uppercase'>
            {title}
        </h3>
    </div>
  )
}
