import React from "react";
import { FiUserPlus, FiLogIn } from "react-icons/fi";
import mobileImg from "../../../../assets/mobile.png";
import searchIcon from "../../../../assets/search.svg";
import slotIcon from "../../../../assets/slot.svg";
import bookIcon from "../../../../assets/book.svg";
import consultIcon from "../../../../assets/callwork.svg";
import './work.css';

const steps = [
  {
    icon: FiUserPlus,
    title: "Register/Signup",
    description:
      "Create your account by providing basic information to get started with our healthcare services.",
  },
  {
    icon: FiLogIn,
    title: "Login",
    description:
      "Login to your account to access personalized healthcare services and manage your appointments.",
  },
  {
    icon: searchIcon,
    title: "Search Doctor",
    description:
      "Find the right specialist by name, specialty, or condition based on your health needs.",
  },
  {
    icon: slotIcon,
    title: "Select slot",
    description:
      "Choose a convenient date and time from the doctor's available schedule.",
  },
  {
    icon: bookIcon,
    title: "Book Appointments",
    description:
      "Confirm your appointment instantly with just a few taps.",
  },
  {
    icon: consultIcon,
    title: "Visit/ Online Consult",
    description:
      "Attend your appointment in person or connect online from the comfort of your home.",
  },
];

const Works = () => {
  return (
    <section className="w-full py-8 px-4">

      <h1 className="text-center font-bold text-3xl mb-12">
        <span className="text-[#013A63]">How it works</span>
      </h1>


      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:gap-12 mt-6">
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <img
            src={mobileImg}
            alt="Mobile Booking"
            className="h-[450px] w-[400px] object-contain max-[425px]:h-[150px] max-[425px]:w-[120px]"
          />
        </div>


        <div className="flex flex-col gap-2 md:flex-1 items-center">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <div className="flex justify-center items-center -mt-2 -mb-2 w-full -ml-8">
                  <svg
                    className="w-8 h-10 text-[#00917F]"
                    fill="currentColor"
                    viewBox="0 0 12 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="5" y="0" width="2" height="18" fill="currentColor" />
                    <path d="M0 18l6 6 6-6H0z" fill="currentColor" />
                  </svg>
                </div>
              )}
              <div className="flex flex-col items-center justify-center w-full">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#013A63] break-words inline-flex items-center gap-2">
                    {step.title}
                    <span className="flex-shrink-0 flex items-center justify-center">
                      {typeof step.icon === 'string' ? (
                        <img src={step.icon} alt={step.title} className="w-8 h-8" />
                      ) : (
                        <div className="flex items-center justify-center rounded-full bg-[#00A99D] w-8 h-8">
                          <step.icon style={{ width: '16px', height: '16px', color: '#fafafa' }} />
                        </div>
                      )}
                    </span>
                  </h3>
                  <p className="text-gray-700 break-words">
                    {step.description}
                  </p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
