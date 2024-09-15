import React from "react";
import Wrapper from "../Wrapper";
import { Chef1, Chef2, Chef3, yellow_line } from "../../Constants";
import Button_1 from "../Button_1";

const About_section = () => {
  return (
    <div className="h-full w-full">
      <Wrapper>
        <div className="flex flex-col justify-center space-y-6 items-center text-center">
          <h3 className="text-2xl font-thin font-great_vibes tracking-extra-wide">
            About Us
          </h3>
          <h1 className="text-5xl font-semibold font-serif text-[#F3D382] ">
            Our Story
          </h1>
          <span className="text-xl w-[30vw] text-center">
            A journey for making successful luxury restaurant with the best
            services
          </span>
        </div>
        <div className="flex justify-center mt-20 items-center gap-10">
          <div className="img w-fit h-full">
            <div className="grid grid-cols-2">
              <div className=" w-full h-full">
                <img src={Chef3} alt="img" className="w-full h-full" />
              </div>
              <div className="flex flex-col w-full h-full">
                <img src={Chef1} alt="img" className="w-full h-full" />
                <img src={Chef2} alt="img" className="w-full h-full" />
              </div>
            </div>
          </div>
          <div className="text w-fit h-full">
            <h2 className="text-3xl font-bold py-10 font-serif ">
              Meet Our Chefs
            </h2>
            <div className="space-y-10">
              <p className="text-lg  font-light ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                feugiat urna id leo euismod rhoncus. Aliquam erat volutpat.
                Nulla id aliquam neque, at dignissim quam. Praesent et lacus
                accumsan, consequat nisl a, mattis sapien.
              </p>
              <p className="text-lg  font-light ">
                Nam sodales ullamcorper aliquet. Phasellus ut pretium libero,
                vitae imperdiet purus. Sed sed tincidunt velit. Aliquam vitae
                ipsum molestie, vehicula nisi quis, finibus leo.
              </p>
              <div
                className="action flex w-fit justify-center gap-2 cursor-pointer group shadow-md hover:bg-yellow-200/40 shadow-yellow-300/35 
      hover:scale-[1.02] border-yellow-300 border-2 p-1 px-3 font-cormorant items-center"
              >
                <span className="capitalize text-yellow-300 group-hover:text-white text-xl">
                  More About Us
                </span>
               <img src={yellow_line} alt="line" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About_section;
