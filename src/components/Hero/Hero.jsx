import React from 'react'
import "./Hero.css"
import Navbar from '../Navbar/Navbar'
import Button_2 from '../Button_2'
import { black_line } from '../../Constants'
const Hero = () => {
  return (
    <div className='md:h-full h-full lg:h-screen bg-heroBg bg-no-repeat shadow-xl  bg-cover w-full  '>
      <div className="radial-shadow h-full w-full"> 
       <Navbar/>
       <div className="flex flex-col text-center justify-center items-center">
        <span className='font-great_vibes font-extralight tracking-widest pt-24 text-3xl md:text-5xl lg:text-[8vh] '>
        Best sushi in town
        </span>
        <span className='text-2xl md:text-4xl   lg:text-7xl leading-5 md:leading-10 lg:leading-[6rem]  font-cinzel_regular font-semibold'>
        Taste the rich flavor of
        
        </span>
        <span className='text-2xl md:text-4xl   lg:text-7xl font-cinzel_regular font-semibold'>
        high quality sushi
        </span>
        <p className='md:w-full md:px-10 px-3 lg:w-[22vw] pt-7 text-xl'>We only use the five star quality for
our menu, come and get the richness in
every food we serve.</p>
<div className="block my-5  ">
  <Button_2 text="GO TO MENU" onClick={()=>{}} imageSrc={black_line}  />
</div>
       </div>
      </div>
       
    </div>
  )
}

export default Hero