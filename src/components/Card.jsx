import React from "react";
import { yellow_line } from "../Constants";
import { IoStar, IoStarHalfOutline, IoStarOutline } from "react-icons/io5";

const Card = ({ imageSrc, title, description, link }) => {
  return (
    <div className="max-w-sm bg-[#2E2E2E] hover:bg-[#494848] cursor-pointer hover:scale-[1.04] group   rounded-lg shadow">
      <a href={link}>
        <img className="rounded-t-lg w-full " src={imageSrc} alt={title} />
      </a>
      <div className="p-5">
        <a href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#F3D382]">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-100">{description}</p>
        <div className="flex my-3 text-3xl text-yellow-500">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStarHalfOutline />
          <IoStarOutline />
        </div>
        <div className="w-fit">
         <div className="action flex justify-center gap-2 cursor-pointer group shadow-md hover:bg-yellow-200/40 shadow-yellow-300/35 hover:scale-[1.02] border-yellow-300 border-2 p-1 px-3 font-cormorant items-center">
            <span className='uppercase text-yellow-300 group-hover:text-white text-xl'>reservation</span>
            <img src={yellow_line} alt="line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
