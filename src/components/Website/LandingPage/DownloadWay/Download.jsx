import React from "react";
import mobileImg from "../../../../assets/app.jpg";
import logo from "../../../../assets/EASHAOP LOGO .png";
import appStore from "../../../../assets/iphone.png";
import playStore from "../../../../assets/play-store.png";
import "./Download.css";


const DownloadSection = () => {
  return (
    <section className="relative w-full bg-white px-4 pt-6 pb-12 md:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-12">

        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={mobileImg}
            alt="Mobile Mockup"
            className="object-cover w-full max-w-[720px] h-[420px] md:h-[520px]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">

          <p className="text-2xl md:text-3xl font-semibold" style={{ marginBottom: '-45px', marginTop: '5px', paddingBottom: '0', lineHeight: '1.2' }}>
            App Launching Soon
          </p>

          {/* LOGO */}
          <img
            src={logo}
            alt="eAsha Healthcare"
            className="w-80 md:w-96"
            style={{ marginBottom: '0', marginTop: '0', paddingBottom: '0', paddingTop: '0', display: 'block' }}
          />

          {/* STORE BUTTONS */}
          <div className="flex justify-center gap-6 -mt-13 ">
            <img
              src={appStore}
              alt="App Store"
              className="w-[160px] h-[48px] object-contain"
            />
            <img
              src={playStore}
              alt="Google Play"
              className="w-[160px] h-[48px] object-contain"
            />
          </div>

        </div>


      </div>
    </section>
  );
};

export default DownloadSection;
