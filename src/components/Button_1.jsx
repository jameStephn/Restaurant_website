import React from 'react';

const Button_1 = ({ text, imageSrc, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="action hidden lg:flex justify-center gap-2 cursor-pointer group shadow-md hover:bg-yellow-200/40 shadow-yellow-300/35 
      hover:scale-[1.02] border-yellow-300 border-2 p-1 px-3 font-cormorant items-center"
    >
      <span className="uppercase text-yellow-300 group-hover:text-white text-xl">
        {text}
      </span>
      {imageSrc && <img src={imageSrc} alt="line" />}
    </div>
  );
};

export default Button_1;
