import React from 'react'
import Wrapper from '../Wrapper'
import { Sushi10 } from '../../Constants'

const Quality_food = () => {
  return (
    <Wrapper>
        <div className="container h-full">
            <div className="flex flex-col space-y-4 justify-center items-center pt-10">
                <span className='font-great_vibes text-2xl font-light tracking-wider'>Quality food for you</span>
                <span className='font-serif text-3xl font-semibold tracking-widest'>Our Specialities</span>
                <p className='font-sans text-2xl  font-light text-center md:px-5 md:w-full lg:w-[35vw]'>Authentic food from our restaurant served
                with high quality ingredients</p>

            </div>
            <div className="flex justify-center mt-7">
                <ul className='flex flex-wrap md:justify-center lg:justify-between gap-2 lg:gap-20'>
                    {["Specialities","Homestyle Sushi","Steak","With Rice","Cocktails","Wine","Appetizer"].map((item,i)=>(

                    <li key={i} className="text-2xl font-light border p-1 px-3 hover:bg-yellow-400 hover:border-yellow-400 rounded-md cursor-pointer transition-colors duration-200 hover:text-black font-serif">
                        {item}
                    </li>
                    ))}
                </ul>

            </div>
            <div className="cards ms-10">

            <div className="block py-10 md:py-5 lg:py-9">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="w-fit col-span-2  h-full">

                    <img className='w-full   shadow-md rounded-lg h-full' src={Sushi10} alt='sushi'/>
                    </div>
                    <div className="flex flex-col col-span-1 justify-start ps-7 py-5 md:py-16 lg:py-32 w-full h-full ">
                        <span className='font-cinzel_regular text-2xl font-semibold tracking-widest text-[#F3D382]'>Dragon Sushi</span>
                        <p className='font-serif w-[70vw] md:w-full'>Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.</p>
                        <span className='text-3xl py-4 font-cinzel_regular font-bold  text-[#F3D382]'>$50</span>
                    </div>
                    

                </div>
            </div>

            <div className="block ">
                <div className="grid md:grid-cols-2 grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col col-span-1 justify-start  md:py-16 py-5 lg:py-32 w-full h-full ">
                        <span className='font-cinzel_regular text-2xl font-semibold tracking-widest text-[#F3D382]'>Dragon Sushi</span>
                        <p className='font-seri w-[70vw] md:w-full mr-10'>Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.</p>
                        <span className='text-3xl py-4 font-cinzel_regular font-bold  text-[#F3D382]'>$50</span>
                    </div>
                    <div className="w-fit col-span-2  h-fit md:h-fit lg:h-full">

                    <img className='w-full rounded-lg  h-full' src={Sushi10} alt='sushi'/>
                    </div>
                    

                </div>
            </div>
            <div className="block py-9">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div className="w-fit col-span-2  h-full">

                    <img className='w-full rounded-lg    h-full' src={Sushi10} alt='sushi'/>
                    </div>
                    <div className="flex flex-col col-span-1 justify-start ps-7  md:py-16 py-5 lg:py-32 w-full h-full ">
                        <span className='font-cinzel_regular text-2xl font-semibold tracking-widest text-[#F3D382]'>Dragon Sushi</span>
                        <p className='font-serif w-[70vw] md:w-full'>Ingredients: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut imperdiet lectus. Donec vitae vulputate nunc, in laoreet urna.</p>
                        <span className='text-3xl py-4 font-cinzel_regular font-bold  text-[#F3D382]'>$50</span>
                    </div>
                    

                </div>
            </div>
            </div>
            </div>
    </Wrapper>
  )
}

export default Quality_food