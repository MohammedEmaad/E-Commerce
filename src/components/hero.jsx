import React from 'react';
import Estore2 from '../assets/Estore2.png';

const Hero = () => {
  return (
    <div className="relative w-full flex justify-center items-center bg-orange-50 ">
      <img
        src={Estore2}
        alt="Estore2"
        className="w-full h-[750px] object-cover"
      />

      <div className="absolute inset-0 flex justify-center item-center text-center text-8xl text-white px-4 bg-black/40 flex-col animate-fade-in  ">
        <h1 className="text-4xl md:text-6xl font-bold ">
          Welcome to MarketHub
        </h1>
        <p className="text-lg md:text-2xl mt-4 animate-bounce">
          Your Shopping Destination
        </p>
      </div>
    </div>
  );
};

export default Hero;
