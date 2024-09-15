import React, { useState } from 'react';
import { yellow_line, Logo_main,Hamburger } from '../../Constants';
import Wrapper from '../Wrapper';
import { GiHamburgerMenu } from "react-icons/gi";
import Button_1 from '../Button_1';

const Navbar = () => {
  // State to handle the mobile menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg lg:ps-20 py-5 navbar-light bg-light">
        <div className="flex justify-between   py-2 items-center">
          <div className="">
            <a className="navbar-brand text-3xl" href="/">
              <img src={Logo_main} alt="Logo" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className='flex justify-center items-center gap-8 shadow-md cursor-pointer font-cormorant'>
              {["Home", "Product", "Fine Dining", "About", "Contact"].map((item, i) => (
                <li key={i} className="text-lg after-line">{item}</li>
              ))}
            </ul>
          </div>

          {/* Reservation Button */}
          {/* <div className="action hidden lg:flex justify-center gap-2 cursor-pointer group shadow-md hover:bg-yellow-200/40 shadow-yellow-300/35 hover:scale-[1.02] border-yellow-300 border-2 p-1 px-3 font-cormorant items-center">
            <span className='uppercase text-yellow-300 group-hover:text-white text-xl'>reservation</span>
            <img src={line} alt="line" />
          </div> */}
          <div className="flex">
            <Button_1  text="Reservation" imageSrc={yellow_line} onClick={()=>{}} />

          </div>

          {/* Hamburger Icon (Mobile View) */}
          <div className="hammber_icon">
            <button className="block md:hidden text-3xl" onClick={toggleMenu}>
              <GiHamburgerMenu className='text-yellow-300' />
            </button>
          </div>
        </div>

        {/* Mobile Menu (Visible only when isMenuOpen is true) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute h-screen top-16 left-0 w-full shadow-lg z-50">
            <div className="flex justify-end text-black ">
                <button className="text-3xl w-16 h-16" onClick={toggleMenu}>
                    <img src={Hamburger}/>
                </button>
            </div>
            <ul className="flex flex-col gap-4 p-4">
              {["Home", "Product", "Fine Dining", "About", "Contact"].map((item, i) => (
                <li key={i} className="text-lg text-black after-line">{item}</li>
              ))}
              <li>
                <button className="w-full py-2 text-center bg-yellow-300 text-white uppercase font-bold">
                  Reservation
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </Wrapper>
  );
};

export default Navbar;
