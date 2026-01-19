import React from "react";
import Icon1 from "../../../../assets/devices.svg";
import Icon2 from "../../../../assets/instant.svg";
import Icon3 from "../../../../assets/call.svg";
import Icon4 from "../../../../assets/Prescription.svg";

<<<<<<< HEAD
const cards = [
  {
    icon: Icon1,
    title: "Instant Access To Experts",
    text:
      "Connect with certified doctors anytime, without waiting in queues or booking days in advance. Get expert advice, prescriptions, and follow-ups all from the comfort of your home."
  },
  {
    icon: Icon2,
    title: "Private And Secure",
    text:
      "Receive digital prescriptions instantly—and get your medicines delivered to your doorstep. Stay on track with your treatment, without stepping out."
=======
const leftCards = [
  {
    icon: Icon1,
    title: "Instant Access To Experts",
    text: "Connect with certified doctors anytime, without waiting in queues or booking days in advance. Get expert advice, prescriptions, and follow-ups all from the comfort of your home."
>>>>>>> 858ff2f30513508742440b20f791896828877a84
  },
  {
    icon: Icon3,
    title: "Consult From Anywhere",
<<<<<<< HEAD
    text:
      "Whether you’re at home, at work, or traveling, get medical advice right where you are. Connect instantly with certified doctors and get the care you need—without the wait."
=======
    text: "Whether you’re at home, at work, or traveling, get medical advice right where you are. Connect instantly with certified doctors and get the care you need—without the wait."
  }
];

const rightCards = [
  {
    icon: Icon2,
    title: "Private And Secure",
    text: "Receive digital prescriptions instantly—and get your medicines delivered to your doorstep. Stay on track with your treatment, without stepping out."
>>>>>>> 858ff2f30513508742440b20f791896828877a84
  },
  {
    icon: Icon4,
    title: "Prescriptions Delivered",
<<<<<<< HEAD
    text:
      "Receive digital prescriptions instantly—and get your medicines delivered to your doorstep. Track your orders in real-time and enjoy hassle-free, contactless delivery."
=======
    text: "Receive digital prescriptions instantly—and get your medicines delivered to your doorstep. Track your orders in real-time and enjoy hassle-free, contactless delivery."
>>>>>>> 858ff2f30513508742440b20f791896828877a84
  }
];

export default function OnlineCareFeatures() {
  return (
<<<<<<< HEAD
    <div className="w-full bg-white px-5 md:px-10 mt-14">
      <h2 className="font-urbanist text-center text-[24px] sm:text-[36px] md:text-[54px] font-bold mt-6">
        <span className="text-[#013A63]">Experience</span> the Ease of Online Care
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:mt-16">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="border border-[#D2CFCF] rounded-[20px] md:rounded-[32px]
                       p-6 md:p-10
                       flex flex-col items-center text-center
                       h-full"
          >

            <div className="bg-[#00A99D] rounded-full flex items-center justify-center
                            w-[60px] h-[60px]
                            md:w-[100px] md:h-[100px] mb-6">
              <img
                src={card.icon}
                alt={card.title}
                className="w-[28px] h-[28px] md:w-[48px] md:h-[48px]"
              />
            </div>


            <h5 className="font-urbanist font-bold text-[#013A63]
                           text-[16px] sm:text-[22px] md:text-[32px]
                           mb-4">
              {card.title}
            </h5>

            <p className="font-urbanist text-[#333]
                          text-[12px] sm:text-[16px] md:text-[20px]
                          leading-relaxed">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}















=======
    <div className="w-full bg-white !overflow-x-hidden px-[20px] md:px-[40px] mt-[50px]">
      <h2 className="font-urbanist text-center text-[24px] sm:text-[36px] md:text-[54px] font-bold pb-0 mt-[24px] md:mt-[40px] leading-tight">
        <span className="text-[#013A63]">Experience</span> the Ease of Online Care
      </h2>
      <div className="feature-grid grid grid-cols-1 gap-[32px] w-full mt-[20px] md:mt-[60px] md:grid-cols-2">
        <div className="flex flex-col gap-[32px] md:gap-[40px] pt-[20px]">
          {leftCards.map((card, idx) => (
            <div
              key={idx}
              className="custom-card border border-[#D2CFCF] rounded-[20px] md:rounded-[32px] flex flex-col gap-[16px] md:gap-[24px] pt-[32px] md:pt-[48px] px-[20px] md:px-[32px] pb-[20px] md:pb-[32px] text-justify"
            >
              <div className="flex justify-center">
                <div className="bg-[#00A99D] rounded-full flex items-center justify-center icon-wrapper">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="icon-img"
                  />
                </div>
              </div>
              <h5 className="font-urbanist font-bold text-[20px] sm:text-[28px] md:text-[41px] leading-tight text-[#013A63] mobile-title">
                {card.title}
              </h5>
              <p className="font-urbanist text-[14px] sm:text-[18px] md:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[32px] text-[#111111] mobile-text">
                {card.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-[32px] md:gap-[40px] pt-[20px]">
          {rightCards.map((card, idx) => (
            <div
              key={idx}
              className="custom-card border border-[#D2CFCF] rounded-[20px] md:rounded-[32px] flex flex-col gap-[16px] md:gap-[24px] pt-[32px] md:pt-[48px] px-[20px] md:px-[32px] pb-[20px] md:pb-[32px]"
            >
              <div className="flex justify-center">
                <div className="bg-[#00A99D] rounded-full flex items-center justify-center icon-wrapper">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="icon-img"
                  />
                </div>
              </div>
              <h5 className="font-urbanist font-bold text-[20px] sm:text-[28px] md:text-[41px] leading-tight text-[#013A63] mobile-title">
                {card.title}
              </h5>
              <p className="font-urbanist text-[14px] sm:text-[18px] md:text-[24px] leading-[22px] sm:leading-[28px] md:leading-[32px] text-[#333] mobile-text">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .custom-card {
          min-height: 250px;
        }

        /* Mobile styles (<= 584px) */
        @media (max-width: 584px) {
          .custom-card {
            min-height: unset;
            padding-top: 16px;
            padding-left: 12px;
            padding-right: 12px;
            gap: 10px;
          }
          .icon-wrapper {
            width: 48px;
            height: 48px;
          }
          .icon-img {
            width: 24px;
            height: 24px;
          }
          .mobile-title {
            font-size: 16px !important;
            line-height: 20px !important;
          }
          .mobile-text {
            font-size: 12px !important;
            line-height: 18px !important;
          }
        }
        
        /* Tablet styles (768px to 1024px) */
        @media (min-width: 768px) and (max-width: 1024px) {
          .custom-card {
            min-height: 300px !important;
            padding-top: 24px !important;
            padding-bottom: 24px !important;
            gap: 16px !important;
          }
          .icon-wrapper {
            width: 80px;
            height: 80px;
          }
          .icon-img {
            width: 40px;
            height: 40px;
          }
          .mobile-title {
            font-size: 28px !important;
            line-height: 32px !important;
          }
          .mobile-text {
            font-size: 18px !important;
            line-height: 24px !important;
          }
        }

        /* Desktop styles (>= 1025px) */
        @media (min-width: 1025px) {
          .icon-wrapper {
            width: 120px !important;
            height: 120px !important;
          }
          .icon-img {
            width: 60px !important;
            height: 60px !important;
          }
        }
      `}</style>
    </div>
  );
}
>>>>>>> 858ff2f30513508742440b20f791896828877a84
