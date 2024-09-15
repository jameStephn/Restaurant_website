import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Button_2 from '../Button_2';
import { black_line, Logo_main } from '../../Constants';
const Footer = () => {
  return (
    <div className='  radial-shadow footer w-full  h-full  bg-no-repeat bg-cover mt-24   '>
            <div className="gradient bg-zinc-900 opacity-85  h-full w-full">
                <div className="flex justify-center gap-7 flex-col pt-16 items-center">
                    <h2 className="text-white text-5xl tracking-widest font-cinzel_regular font-bold">We ready to have you</h2>
                    <h2 className="text-white text-5xl tracking-widest font-cinzel_regular font-bold">                    the best dining experiences
                    </h2>

                </div>
                <div className="flex justify-center mt-44 gap-2 items-center">
                    <div className="flex justify-center items-center gap-3">

                    <FaLocationDot className='text-3xl text-yellow-300'/>
                    <p className="text-white text-start text-sm font-thin w-[20vw] ">House no.135-F, Hallway Road, Railway Colony, Garhi Shahu, Lahore</p>
                    </div>
                    <div className="flex justify-center items-center gap-3">

                    <FaPhoneAlt className='text-3xl text-yellow-300'/>
                    <div className="flex flex-col">

                    <span className='text-2xl font-bold '>Call us: </span>
                    <p className="text-white text-start text-2xl font-semibold w-[20vw] ">
                        +92 3423840421
                    </p>
                    </div>
                    </div>
                </div>
                <div className="  flex  justify-center py-10">
                    <Button_2  text={"Reserve A Table" } imageSrc={black_line}/>
                </div>
                <div className="  flex  justify-center ">
                    <a href="/">
    
                    <img src={Logo_main} alt="logo" className='cursor-pointer' />
                    </a>
                    </div>
                    <div className="  flex my-10 py-10 justify-center ">
                    <ul className='flex '>
                        {["Instagram", "Facebook","Twitter"].map((item,i)=>(
                            <li key={i} className='  font-bold mx-2 text-lg text-white after-line'>
                                    {item}
                            </li>
                            
                        ))}
                    </ul>
                    </div>

            </div>
        
    </div>
  )
}

export default Footer