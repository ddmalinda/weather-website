
type Props={
    title:string
}
export default function BigTitles({title}:Props) {

  return (
    <div>
        <h2 className='flex gap-1  text-3xl  font-roboto  font-bold items-end text-gray-500  uppercase'>
            {title}
        </h2>
    </div>
  )
}
