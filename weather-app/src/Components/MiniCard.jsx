/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import sun from "../assets/icons/sun.jpg";
import cloud from "../assets/icons/clouds.jpg";
import fog from "../assets/icons/fog.jpg";
import rain from "../assets/icons/rain.jpg";
import snow from "../assets/icons/snow.jpg";
import storm from "../assets/icons/storm.jpg";
import wind from "../assets/icons/wind.jpg";

const MiniCard = ({time, temp, iconString}) => {
  const [icon, setIcon] = useState() 

  useEffect(()=>{
    if (iconString) {
      if (iconString.toLowerCase().includes("cloud")) {
        setIcon(cloud);
      } else if (iconString.toLowerCase().includes("rain")) {
        setIcon(rain);
      } else if (iconString.toLowerCase().includes("sun")) {
        setIcon(sun);
      } else if (iconString.toLowerCase().includes("thunder")) {
        setIcon(storm);
      } else if (iconString.toLowerCase().includes("fog")) {
        setIcon(fog);
      } else if (iconString.toLowerCase().includes("snow")) {
        setIcon(snow);
      } else if (iconString.toLowerCase().includes("wind")) {
        setIcon(wind);
      }
    }
  }, [iconString])
  return (
    <div className='glassCard w-[10rem] h-[10rem] p-4 flex flex-col'>
      <p className=" text-center">
        {new Date(time).toLocaleTimeString('en',{weekday: 'long'}).split(" ")[0]}
      </p>
      <hr />
      <div className=" w-full flex justify-center items-center flex-1">
        <img src={icon} alt="weather" className='w-[4rem] h-[4rem]' />
      </div>
      <p className=" text-center font-bold">{temp}&deg;C</p>
    </div>
  )
}

export default MiniCard