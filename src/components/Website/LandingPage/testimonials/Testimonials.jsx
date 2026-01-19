

import React, { useRef, useState, useEffect } from "react";
import Star from "../../../../assets/Star.svg";
import rameshImage from "../../../../assets/SRamesh.png";
import anitaImage from "../../../../assets/anitharao.png";
import sivaImage from "../../../../assets/Siva.png";
//import sandeepImage from "../../../../assets/Sandeep.png";
import vamshiImage from "../../../../assets/Vamshi.png";
import deepikaImage from "../../../../assets/Deepika.png";
import vikashImage from "../../../../assets/Vikash.png";
import iyerImage from "../../../../assets/Iyer.png";



const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "S. Ramesh",
      text:
        "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
      image: rameshImage,
    },
    {
      id: 2,
      name: "Anita Rao",
      text:
        "I was worried about my health and didn’t know which doctor to consult. This platform guided me perfectly and helped me book an appointment with the right specialist. Excellent service!",
      image: anitaImage,
    },
    {
      id: 3,
      name: "Siva",
      text:
        "I needed urgent medical advice late at night, and this platform helped me immediately. The consultation was fast and accurate.",
      image: sivaImage,
    },
    {
      id: 4,
      name: "Sandeep",
      text:
        "This website made healthcare so much easier for me and my family. Everything was smooth and well organized.",
      image: rameshImage,
    },
    {
      id: 5,
      name: "Vamshi",
      text:
        "A best platform for online doctor consultations. It saved me time and helped me get proper medical guidance.",
      image: vamshiImage,
    },
    {
      id: 6,
      name: "Deepika Singh",
      text:
        "I was confused and anxious about my health issue, but this website made everything simple and easy.",
      image: deepikaImage,
    },
    {
      id: 7,
      name: "Vikash",
      text:
        "I had a great experience using this website. It helped me reach the right doctor at the right time.",
      image: vikashImage,
    },
    {
      id: 8,
      name: "Iyer",
      text:
        "An excellent healthcare platform. It saved me so much time and effort.",
      image: iyerImage,
    },
  ];

  const scrollRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const CARDS_PER_PAGE = 2; // 🔥 IMPORTANT

  const updateActiveByPosition = () => {
    const container = scrollRef.current;
    const cards = itemRefs.current;
    if (!container || !cards.length) return;

    const center = container.scrollLeft + container.clientWidth / 2;
    let nearest = 0;
    let minDist = Infinity;

    cards.forEach((el, idx) => {
      if (!el) return;
      const elCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(center - elCenter);
      if (dist < minDist) {
        minDist = dist;
        nearest = idx;
      }
    });

    setActiveIndex(nearest);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener("scroll", updateActiveByPosition, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveByPosition);

    return () => {
      container.removeEventListener("scroll", updateActiveByPosition);
      window.removeEventListener("resize", updateActiveByPosition);
    };
  }, []);

  const scrollToCard = (index) => {
    const el = itemRefs.current[index];
    if (!el || !scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: el.offsetLeft,
      behavior: "smooth",
    });
  };

 
  const dotsCount = Math.ceil(testimonials.length / CARDS_PER_PAGE);

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-[42px] md:text-[54px] font-extrabold text-center mb-12"
          style={{ color: "#013A63" }}
        >
          Testimonials
        </h1>

        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex space-x-6 w-max">
              {testimonials.map((t, idx) => (
                <div
                  key={t.id}
                  ref={(el) => (itemRefs.current[idx] = el)}
                  className="
                    bg-white rounded-2xl p-8
                    w-[520px]          /* 🔥 WIDER CARD = ONLY 2 PER VIEW */
                    flex flex-col
                    border border-[#E5E7EB]
                  "
                  style={{ scrollSnapAlign: "start" }}
                >
                
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src={Star} className="w-5 h-5 mr-1" />
                    ))}
                  </div>

                  
                  <p className="text-gray-700 text-base leading-relaxed">
                    {t.text}
                  </p>

                  
                  <div className="flex items-center gap-4 mt-auto pt-8">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <h3 className="text-xl font-semibold text-gray-900">
                      {t.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: dotsCount }).map((_, index) => (
              <div
                key={index}
                onClick={() => scrollToCard(index * CARDS_PER_PAGE)}
                className={`cursor-pointer h-2 rounded-full transition-all ${
                  Math.floor(activeIndex / CARDS_PER_PAGE) === index
                    ? "bg-teal-600 w-8"
                    : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;





