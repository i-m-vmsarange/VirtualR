import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className=" text-4xl lg:text-7xl sm:text-6xl text-center tracking-wide">
        VirtualR build tools
        <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10  text-center text-lg  text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10  ">
        <a
          href="#"
          className="px-4 py-3 bg-linear-to-r from-orange-500 to-orange-800 rounded-md mx-3 text-center"
        >
          Start for free
        </a>
        <a
          href="#"
          className="px-4 py-3 border border-amber-50 rounded-md mx-3 text-center"
        >
          Documentation
        </a>
      </div>
      <div className="flex lg:flex-row sm:flex-row flex-col justify-center mt-10">
        <video
          muted
          autoPlay
          loop
          className="w-full sm:w-1/2 lg:w-1/2 rounded-lg border border-orange-700 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support video tag.
        </video>
        <video
          muted
          autoPlay
          loop
          className="w-full sm:w-1/2 lg:w-1/2 rounded-lg border border-orange-700 mx-3 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
