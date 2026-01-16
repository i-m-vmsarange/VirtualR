import React from "react";
import { features } from "../constants";
const Features = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-200">
      {/* Features capsule element */}
      <div className="text-center">
        <span className="rounded-full h-6 text-orange-500 bg-neutral-900 font-medium px-2 py-1 uppercase text-sm ">
          Features
        </span>
      </div>
      {/* Heading of the features section */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-10 sm:mt-10 lg:mt-20">
        Easily build{" "}
        <span className="bg-linear-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          your code
        </span>
      </h2>
      {/* Features elements */}
      <div className="flex  flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => {
          return (
            <div key={index} className="w-full  sm:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex bg-neutral-900 p-2 items-center justify-center text-orange-700 text-sm mx-6 h-10 w-10 rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                  <p className="text-neutral-500 text-md p-2 mb-20">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
