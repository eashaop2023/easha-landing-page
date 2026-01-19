import React from "react";
import doctorGroup from "../../../assets/doctor-group.png";

const WhatWeDoSection = () => {
  return (
    <section
      className="
        w-full
        flex flex-col md:flex-row
        items-center
        md:justify-center
        px-6 md:px-12
        pt-12 pb-8 md:pt-0 md:pb-10
        relative
        z-10
      "
    >
      {/* LEFT: Doctors */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={doctorGroup}
          alt="Doctor Group"
          className="w-full max-w-md object-contain"
        />
      </div>

      {/* RIGHT: Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center mt-6 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-5 text-center md:text-left">
          What We Do
        </h2>

        <ul className="flex flex-col space-y-3 text-lg">
          {[
            "Online doctor & hospital appointment bookings.",
            "24×7 availability.",
            "Transparent pricing (no hidden charges).",
            "Patient-first approach.",
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="h-3 w-3 rounded-full bg-teal-400 mt-2 mr-3 flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
