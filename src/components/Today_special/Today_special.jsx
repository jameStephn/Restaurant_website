import React from 'react'
import Wrapper from '../Wrapper'
import Card from "../Card"
import { Card_1 } from '../../Constants'
const Today_special = () => {
  return (
    <Wrapper>

    <div className='h-full py-10   w-full'>
        <div className="flex flex-col space-y-6 justify-center items-center">
            <span className='font-great_vibes  text-3xl -tracking-tighter font-thin'>
            Special menu
            </span>
            <span className='font-cinzel_regular text-5xl font-bold tracking-wider'>
            Today’s Special
            </span>
            <p className='font-sans text-2xl w-[40vw] text-center'>
            Special menu oftenly comes different everyday,
            this is our special food for today
            </p>


        </div>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ms-2 xl:grid-cols-4 gap-3 my-8">
            <Card imageSrc={Card_1} title={"Tuna Sushi"} description={"Sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold"} link={"/"}/>
            <Card imageSrc={Card_1} title={"Tuna Sushi"} description={"Sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold"} link={"/"}/>
            <Card imageSrc={Card_1} title={"Tuna Sushi"} description={"Sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold"} link={"/"}/>
            <Card imageSrc={Card_1} title={"Tuna Sushi"} description={"Sushi, a staple rice dish of Japanese cuisine, consisting of cooked rice flavoured with vinegar and a variety of vegetable, egg, or raw seafood garnishes and served cold"} link={"/"}/>
        </div>
     
    </div>
    </Wrapper>
  )
}

export default Today_special