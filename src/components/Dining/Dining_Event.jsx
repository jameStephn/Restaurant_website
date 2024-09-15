import React from 'react'
import Wrapper from '../Wrapper'
import { Rectangle36 } from '../../Constants'
import "./Dining.css"
const Dining_Event = () => {
  return (
    <section className='h-full w-full my-4 '>
        <Wrapper>

        <div className="flex flex-col justify-center space-y-6 items-center text-center" >
            <h3 className='text-2xl font-thin font-great_vibes tracking-extra-wide'>Choose your event</h3>
            <h1 className='text-5xl font-semibold font-serif text-[#F3D382] '>
            Dining Events
            </h1>
            <span className='text-xl w-full md:w-[50vw] lg:w-[30vw] text-center'>
            We provide dining event for your special day
            with your important people
            </span>
            <div className="flex gap-10 justify-center" >
                <button className='text-black text-2xl px-6 p-2 bg-yellow-300'>Private Events</button>
                <button className='text-white border text-2xl px-6 p-2 '>Corporate Events</button>

            </div>
        </div>
        <div className="blcok my-5 flex">
            <div className="content w-1/4">
                <div className="head  py-40 ">

                <div className="flex justify-start  gap-4">
                    <div className="h2 text-5xl font-cormorant text-[#F3D382]">
                        $500
                    </div>
                    <div className="h2 uppercase pt-5  text-3xl text-[#F3D382] font-cinzel_regular">
                        Fine Dining
                    </div>
                </div>
                <p className='font-serif text-lg ms-28 w-52'>Bottle of Champagne

Fine Sushi Tower For 2+
Dessert</p>
                </div>
            </div>
            <div className=" block">

            <div className="img  bg-dining1   h-[65vh] w-fit ">
                <div className="  w-[60vw] radial-shadow bg-gradient-to-r from-gray-950 to-transparent opacity-25 h-full"></div>
            </div>
            </div>
        </div>
        <div className="blcok my-5 flex">
            
            <div className=" block">

            <div className="img  bg-dining1  linear-gr radial-shadow h-[65vh] w-fit ">
                <div className="  w-[60vw] radial-shadow bg-gradient-to-r from-transparent to-gray-950 opacity-25 h-full"></div>
            </div>
            </div>
            <div className="content w-1/4">
                <div className="head  py-40 ">

                <div className="flex justify-start  gap-4">
                    <div className="h2 text-5xl font-cormorant text-[#F3D382]">
                        $1000
                    </div>
                    <div className="h2 uppercase pt-5  text-3xl text-[#F3D382] font-cinzel_regular">
                    Gold Dining
                    </div>
                </div>
                <p className='font-serif text-lg ms-28 w-52'>Bottle of Champagne
Secret Menu Sushi For 2+
Dessert</p>
                </div>
            </div>
        </div>
        <div className="blcok my-5 flex">
            <div className="content w-1/4">
                <div className="head  py-40 ">

                <div className="flex justify-start  gap-4">
                    <div className="h2 text-5xl font-cormorant text-[#F3D382]">
                        $1500
                    </div>
                    <div className="h2 uppercase pt-5  text-3xl text-[#F3D382] font-cinzel_regular">
                    Royalty Dinning
                    </div>
                </div>
                <p className='font-serif text-lg ms-28 w-52'>Bottle of Luxury Champagne
Special Menu Sushi For 2+
Royal Dessert</p>
                </div>
            </div>
            <div className=" block">

            <div className="img  bg-dining1  linear-gr radial-shadow h-[65vh] w-fit ">
                <div className=" w-[60vw] radial-shadow bg-gradient-to-r from-gray-950 to-transparent opacity-25 h-full"></div>
            </div>
            </div>
        </div>
       
        </Wrapper>
    </section>
  )
}

export default Dining_Event