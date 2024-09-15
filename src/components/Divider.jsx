import React from 'react'
import { Image_divider } from '../Constants'
const Divider = () => {
  return (
    <div className="imageDivider w-full h-[30vh] md:h-[70vh] lg:h-[40vh]">
    <img src={Image_divider} className='w-full h-full opacity-50 ' alt='divider'/>

</div>
  )
}

export default Divider