import React from 'react';
import FlowerMain from '../assets/flowerMain.png';

const Hero = () => {
  return (
    <div className="relative w-full flex justify-center items-center bg-orange-50 ">
      <img
        src={FlowerMain}
        alt="Flower"
        className="w-full h-[750px] object-cover"
      />

      <div className="absolute inset-0 flex justify-center item-center text-center text-8xl text-white px-4 bg-black/40 flex-col animate-fade-in  ">
        <h1 className="text-4xl md:text-6xl font-bold ">Welcome to Our Site</h1>
        <p className="text-lg md:text-2xl mt-4 animate-bounce">
          Discover the beauty of nature
        </p>
      </div>
    </div>
  );
};

export default Hero;
