import React from "react";
import Icon1 from "../../../../assets/devices.svg";
import Icon2 from "../../../../assets/instant.svg";
import Icon3 from "../../../../assets/call.svg";
import Icon4 from "../../../../assets/Prescription.svg";

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
  },
  {
    icon: Icon3,
    title: "Consult From Anywhere",
    text:
      "Whether you’re at home, at work, or traveling, get medical advice right where you are. Connect instantly with certified doctors and get the care you need—without the wait."
  },
  {
    icon: Icon4,
    title: "Prescriptions Delivered",
    text:
      "Receive digital prescriptions instantly—and get your medicines delivered to your doorstep. Track your orders in real-time and enjoy hassle-free, contactless delivery."
  }
];

export default function OnlineCareFeatures() {
  return (
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















