import React from "react";
import { pricingOptions } from "../constants";
import { CheckCircleIcon, SpaceIcon } from "lucide-react";

const Price = () => {
  return (
    // Pricing Section
    <div className="mt-20  max-w-7xl mx-auto ">
      {/* Pricing Heading */}
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      {/* Pricing Contents */}
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => {
          return (
            <div key={index} className="w-full  sm:w-1/2 lg:w-1/3 p-2">
              <div className="p-10 border border-neutral-700 rounded-xl">
                <p className="text-4xl mb-8">
                  {option.title}
                  {option.title === "Pro" && (
                    <span className="text-xl mb-4 ml-2 bg-linear-to-r from-orange-500 to-red-400 bg-clip-text text-transparent">
                      {" "}
                      (Most Popular)
                    </span>
                  )}
                </p>
                <p className="mb-8">
                  <span className="text-5xl mt-6 mr-2">{option.price}</span>
                  <span className="text-neutral-400 tracking-tight">
                    /Month
                  </span>
                </p>
                <ul>
                  {option.features.map((feature, index) => (
                    <li
                      key={index}
                      className="mt-8 flex items-center justify-start"
                    >
                      <CheckCircleIcon />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl border border-orange-900 hover:bg-orange-900 rounded-lg transition duration-500"
                >
                  Subscribe
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Price;
