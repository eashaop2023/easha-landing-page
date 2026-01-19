<<<<<<< HEAD

=======
>>>>>>> 858ff2f30513508742440b20f791896828877a84
import React from "react";
import DoctorImage from "../../../assets/Doctor1.png";

import { FaCalendarAlt, FaBalanceScale } from "react-icons/fa";
import { FaTruckMedical, FaFingerprint } from "react-icons/fa6";

<<<<<<< HEAD
=======

>>>>>>> 858ff2f30513508742440b20f791896828877a84
const features = [
  {
    icon: <FaCalendarAlt className="text-3xl text-teal-600" />,
    text: "Effortless Appointment Booking",
  },
  {
    icon: <FaTruckMedical className="text-3xl text-teal-600" />,
    text: "True 24x7 Care Access",
  },
  {
    icon: <FaBalanceScale className="text-3xl text-teal-600" />,
    text: "Zero-Fee, Fully Transparent",
  },
  {
    icon: <FaFingerprint className="text-3xl text-teal-600" />,
    text: "Single Sign-On For Life",
  },
];

const HealthcareSection = () => {
  return (
<<<<<<< HEAD
    /* Changed py-24 to pt-12 pb-24 to reduce space above the heading */
    <div className="w-full pt-12 pb-24 px-6 sm:px-12 md:px-20 lg:px-32 font-urbanist">

      <h2 className="text-2xl sm:text-3xl font-semibold text-teal-600 text-center">
        Consult Trusted Healthcare, Anytime, Anywhere
      </h2>

      {/* Changed mt-8 to mt-2 to bring the image and cards closer to the heading */}
      <div className="mt-2">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex justify-center">
            <div className="w-full max-w-lg h-[390px] rounded-xl overflow-hidden shadow-md">
              <img
                src={DoctorImage}
                alt="Doctors"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CARDS SECTION */}
          <div className="h-[440px] flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-100
                               shadow-md p-6
                               flex flex-col items-center justify-center
                               text-center transition hover:shadow-lg"
                >
                  {feature.icon}
                  <p className="mt-4 text-base font-medium text-gray-800">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

=======
    <div className="w-full py-16 px-6 sm:px-12 md:px-20 lg:px-32 font-urbanist">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src={DoctorImage}
            alt="Doctors"
            className="rounded-lg  shadow-md w-full max-w-md lg:max-w-lg"
          />
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-teal-600 mb-8">
            Consult Trusted Healthcare, Anytime, Anywhere
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                {feature.icon}
                <p className="mt-3 text-base font-medium text-gray-800">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
>>>>>>> 858ff2f30513508742440b20f791896828877a84
        </div>
      </div>
    </div>
  );
};

export default HealthcareSection;
