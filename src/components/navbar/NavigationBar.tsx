import axios from "axios"
import {useState } from "react"
import Searchbox from "./nagigationComponents/Searchbox"

type Props = {
  API_KEY: string | undefined;
  currentLocation: string;
  SetCurrentLocation: React.Dispatch<React.SetStateAction<string>>;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

export default function NavigationBar({ currentLocation, SetCurrentLocation, setStatus,API_KEY }: Props) {

  //hooks
  const [location, setLocation] = useState('')
  const [loactionError, setLocationError] = useState('')
  const [suggetions, setSuggetions] = useState('no location')
  const [showSuggetion, setShowSuggetions] = useState(false)

  
  async function handleInputChange(value: string) {
    setLocation(value);
    if (value.length > 2) {
      try {
        const response = await axios.get(`http://api.weatherapi.com/v1/timezone.json?key=${API_KEY}&q=${location}`)
        setShowSuggetions(true)
        setLocationError('')
        setSuggetions(response.data.location.name)
      } catch (error) {
        setSuggetions('')
        setLocationError('')
        setShowSuggetions(false)

      }
    } else {
      setSuggetions('')
      setShowSuggetions(false)
    }
  }

  const handleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!suggetions) {
      setLocationError("Location not found")
    } else if (location === "") {
      setStatus("notStarted")
    } else {
      SetCurrentLocation(location)
      setStatus("enterd")
      setLocationError("")
      setShowSuggetions(false)
      setLocation('')
    }
  }

  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className='h-[80px] w-full flex  max-sm:hidden items-center justify-between px-3 mx-auto container'>
        <div className=" text-4xl font-roboto  font-bold text-gray-500 flex ">
          Weather
          <svg className="fill-blue-600" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" ><path d="M240-173.33q-60.67 0-103.67-43T93.33-320q0-60.67 43-103.67t103.67-43q42 0 77.17 22.67 35.16 22.67 51.16 61.67l15.34 35H421q36 0 60.83 25.66Q506.67-296 506.67-260t-25.34 61.33Q456-173.33 420-173.33H240Zm331.67-86q-1.34-61.67-42.5-106-41.17-44.34-102.17-48-23.67-55.34-73.17-87.84t-110.5-32.16q18-83 84.67-134.84Q394.67-720 480-720q100 0 170 70t70 170q0 73.67-40.33 133.5-40.34 59.83-108 87.17Zm-125-507.34V-920h66.66v153.33h-66.66ZM706-659.33l-46.67-47.34 108-108.66 47 47.66L706-659.33Zm60.67 212.66v-66.66H920v66.66H766.67ZM768-145.33 660-254l47.33-47.33 108.67 108-48 48Zm-514-514L145.67-767.67l47-47 108 108.67L254-659.33Z" /></svg>
        </div>
        <section className="flex gap-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#6a7282"><path d="M480.06-486.67q30.27 0 51.77-21.56 21.5-21.55 21.5-51.83 0-30.27-21.56-51.77-21.55-21.5-51.83-21.5-30.27 0-51.77 21.56-21.5 21.55-21.5 51.83 0 30.27 21.56 51.77 21.55 21.5 51.83 21.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z" /></svg>
          <p className="font-poppins uppercase"> {currentLocation}</p>
          <Searchbox value={location}
            onChange={(e) => handleInputChange(e.target.value)}
            onSubmite={handleSubmitSearch}
            error={loactionError}
            handleSuggestionsClick={handleInputChange}
            showSuggestions={showSuggetion}
            suggestion={suggetions}
          />
        </section>
      </div>
       <div className='h-[130px] w-full flex sm:hidden  flex-col items-center justify-around  px-3 mx-auto container'>
        <div className=" text-4xl font-roboto  font-bold text-gray-500 flex ">
          Weather
          <svg className="fill-blue-600" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" ><path d="M240-173.33q-60.67 0-103.67-43T93.33-320q0-60.67 43-103.67t103.67-43q42 0 77.17 22.67 35.16 22.67 51.16 61.67l15.34 35H421q36 0 60.83 25.66Q506.67-296 506.67-260t-25.34 61.33Q456-173.33 420-173.33H240Zm331.67-86q-1.34-61.67-42.5-106-41.17-44.34-102.17-48-23.67-55.34-73.17-87.84t-110.5-32.16q18-83 84.67-134.84Q394.67-720 480-720q100 0 170 70t70 170q0 73.67-40.33 133.5-40.34 59.83-108 87.17Zm-125-507.34V-920h66.66v153.33h-66.66ZM706-659.33l-46.67-47.34 108-108.66 47 47.66L706-659.33Zm60.67 212.66v-66.66H920v66.66H766.67ZM768-145.33 660-254l47.33-47.33 108.67 108-48 48Zm-514-514L145.67-767.67l47-47 108 108.67L254-659.33Z" /></svg>
        </div>
         
        <section className="flex gap-2 items-center m-3 ">
          <Searchbox value={location}
            onChange={(e) => handleInputChange(e.target.value)}
            onSubmite={handleSubmitSearch}
            error={loactionError}
            handleSuggestionsClick={handleInputChange}
            showSuggestions={showSuggetion}
            suggestion={suggetions}
          />
        </section>
      </div>
    </nav>
  )
}
