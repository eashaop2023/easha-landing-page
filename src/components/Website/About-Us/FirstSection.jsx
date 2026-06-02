// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="w-full">

//       <div className="w-full h-[160px] bg-[#1F4053] flex justify-center items-center hidden lg:flex">
//       <h2 className="font-urbanist font-bold text-white flex items-center justify-center text-3xl md:text-4xl lg:text-[41px]">
//         About Us
//         </h2>
//         </div>

//       <div className="w-full text-left px-6 sm:px-12 md:px-20 lg:px-[186px] py-10">
//       <h3 className="text-xl sm:text-2xl md:text-[26px] lg:text-[28px] text-center font-bold font-urbanist mb-4 mt-4 lg:mt-0 !mt-10 lg:!mt-0">
//   About <span className="text-[#880303]">Kantan IT Pvt Ltd</span>
// </h3>

//         <p className="text-sm sm:text-base text-gray-700 font-urbanist leading-relaxed">
//           We're a digital-first OP care platform offering seamless doctor appointments,
//           teleconsultations, and doorstep medicine delivery. With AI diagnostics,
//           Aadhaar OTP, and DigiLocker integration, we connect patients, pharmacies,
//           and emergency services—all in one place.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React from "react";

const AboutUs = () => {
  return (
    <section className="w-full">
      <div className="text-center">
        {/* Blue Banner: h-[160px] matches your Services section for consistency */}
        <h2
          className="font-bold font-urbanist flex justify-center text-white h-[160px] items-center lg:text-4xl pt-10"
          style={{ backgroundColor: "#1F4053" }}
        >
          About Us
        </h2>

        {/* Content below the banner */}
        <div className="mt-10 px-6 md:px-10">
          <h3 className="text-[#8B0000] font-bold text-2xl mb-4">
            About Kantan IT Pvt Ltd
          </h3>
          <p className="text-gray-700 text-justify leading-relaxed">
            We're a digital-first OP care platform offering seamless doctor
            appointments, teleconsultations, and doorstep medicine delivery...
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
