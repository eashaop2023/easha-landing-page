import React from "react";
import doctorGroup from "../../../assets/doctor-group.png";

const WhatWeDoSection = () => {
  return (
<<<<<<< HEAD
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
=======
    <section className="w-full flex flex-col md:flex-row items-center md:justify-center p-6 md:p-12 move-up-desktop">
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
>>>>>>> 858ff2f30513508742440b20f791896828877a84
        <img
          src={doctorGroup}
          alt="Doctor Group"
          className="w-full max-w-md object-contain"
        />
      </div>
<<<<<<< HEAD

      {/* RIGHT: Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center mt-6 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mb-5 text-center md:text-left">
          What We Do
        </h2>

        <ul className="flex flex-col space-y-3 text-lg">
=======
      <div className="w-full md:w-1/2 flex flex-col relative">
        <h2
          className="
          text-2xl md:text-3xl font-semibold 
          text-black 
          mb-8 
          text-center
          md:text-left md:ml-[-40px]
          large-screen-center
        "
        >
          What We Do
        </h2>

        <ul className="flex flex-col space-y-4 text-lg w-full four-k-list">
>>>>>>> 858ff2f30513508742440b20f791896828877a84
          {[
            "Online doctor & hospital appointment bookings.",
            "24×7 availability.",
            "Transparent pricing (no hidden charges).",
            "Patient-first approach.",
          ].map((item, index) => (
<<<<<<< HEAD
            <li key={index} className="flex items-start">
              <span className="h-3 w-3 rounded-full bg-teal-400 mt-2 mr-3 flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
=======
            <li key={index} className="flex items-start text-left">
              <span className="h-3 w-3 rounded-full bg-teal-400 mt-2 mr-3 flex-shrink-0"></span>
              <span className="leading-snug break-words">{item}</span>
            </li>
          ))}
        </ul>
        <style jsx>{`
          /* Move container up only on desktops */
          @media (min-width: 1024px) and (max-width: 1439.98px)  {
            .move-up-desktop {
              margin-top: -140px; /* Pull section upward */
            }
            .large-screen-center {
              text-align: center;
              margin-left: 0;
              width: 65%;
              margin-top: 80px;
            }
          }
           @media (min-width: 1440px) and (max-width: 2559.98px)  {
            .move-up-desktop {
              margin-top: -70px; /* Pull section upward */
            }
        }
          /* Specifically for 4K screens */
          @media (min-width: 1920px) {
            .large-screen-center {
              text-align: center;
              margin-left: 0;
              width: 100%;
              display: block;
            }

            .four-k-list {
              font-size: 1.5rem;
            }

            .four-k-list li {
              margin-bottom: 1rem;
            }
          }

        `}</style>
>>>>>>> 858ff2f30513508742440b20f791896828877a84
      </div>
    </section>
  );
};

export default WhatWeDoSection;
