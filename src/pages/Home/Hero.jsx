import React from 'react';
import { VscFeedback } from "react-icons/vsc";
import { IoMdArrowRoundForward } from "react-icons/io";
import AnimatedBlob from '../../components/AnimatedBlob';
import './Hero.css';

function Hero() {
  return (
    <section className="relative bg-cover bg-center h-[55vh] overflow-hidden bg-black rounded-b-lg shadow-xl ">
      {/* Blob Component in Background
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <AnimatedBlob className="w-full h-full" />
      </div> */}

      {/* Content */}
      <div className="z-10 relative text-center text-white">
        <div className="px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold">LOGO</h1>
          <div className="flex flex-col justify-center items-center">
            <VscFeedback className="text-xl" />
            <span className="text-xs">Contact us</span>
          </div>
        </div>
        <div className="container mx-auto px-4 py-16 space-y-8 flex flex-col justify-center items-center">
          <h1 className="md:text-6xl text-5xl font-bold">Event Estimate Calculator</h1>
          <p className="text-xl text-gray-300">Get a quick estimate for your next event.</p>
          <button className="bg-blue-700 transition ease-in-out duration-150 hover:-translate-y-1 hover:scale-110 text-white py-2 px-4 rounded-lg font-bold hover:bg-transparent hover:border hover:text-white focus:outline-none flex items-center gap-1">
            <span className="text-xl">Get Started</span>
            <IoMdArrowRoundForward />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
