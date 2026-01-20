import React from "react";
import { testimonials } from "../constants/index";
const Testimonials = () => {
  return (
    <div className="mt-20 max-w-7xl mx-auto tracking-wide">
      <h2 className="text-center text-3xl sm:text-5xl lg:text-6xl ">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center mt-20">
        {testimonials.map((testimonial, index) => {
          return (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
              <div className="bg-neutral rounded-md p-6 text-md border border-neutral-800 ">
                <p className="font-thin">{testimonial.text}</p>
                <div className="mt-8 flex items-start">
                  <img
                    src={testimonial.image}
                    alt={testimonial.user}
                    className="w-12 h-12 mr-6 border border-neutral-300 rounded-full"
                  />
                  <div>
                    <h6 className="text-neutral-400">{testimonial.user}</h6>
                    <span className="text-neutral-600 italic text-sm font-normal">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
