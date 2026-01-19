<<<<<<< HEAD


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


=======
import React, { useRef, useState, useEffect } from "react";
import Star from "../../../../assets/Star.svg";
import rameshImage from "../../../../assets/rameshimage.png";
import anitaImage from "../../../../assets/anitaraoimage.png";
>>>>>>> 858ff2f30513508742440b20f791896828877a84

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "S. Ramesh",
<<<<<<< HEAD
      text:
        "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
=======
      text: "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
>>>>>>> 858ff2f30513508742440b20f791896828877a84
      image: rameshImage,
    },
    {
      id: 2,
      name: "Anita Rao",
<<<<<<< HEAD
      text:
        "I was worried about my health and didn’t know which doctor to consult. This platform guided me perfectly and helped me book an appointment with the right specialist. Excellent service!",
=======
      text: "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
>>>>>>> 858ff2f30513508742440b20f791896828877a84
      image: anitaImage,
    },
    {
      id: 3,
      name: "Siva",
<<<<<<< HEAD
      text:
        "I needed urgent medical advice late at night, and this platform helped me immediately. The consultation was fast and accurate.",
      image: sivaImage,
=======
      text: "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
      image: rameshImage,
>>>>>>> 858ff2f30513508742440b20f791896828877a84
    },
    {
      id: 4,
      name: "Sandeep",
<<<<<<< HEAD
      text:
        "This website made healthcare so much easier for me and my family. Everything was smooth and well organized.",
      image: rameshImage,
=======
      text: "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
      image: anitaImage,
>>>>>>> 858ff2f30513508742440b20f791896828877a84
    },
    {
      id: 5,
      name: "Vamshi",
<<<<<<< HEAD
      text:
        "A best platform for online doctor consultations. It saved me time and helped me get proper medical guidance.",
      image: vamshiImage,
=======
      text: "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
      image: rameshImage,
>>>>>>> 858ff2f30513508742440b20f791896828877a84
    },
    {
      id: 6,
      name: "Deepika Singh",
<<<<<<< HEAD
      text:
        "I was confused and anxious about my health issue, but this website made everything simple and easy.",
      image: deepikaImage,
=======
      text: "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
      image: anitaImage,
>>>>>>> 858ff2f30513508742440b20f791896828877a84
    },
    {
      id: 7,
      name: "Vikash",
<<<<<<< HEAD
      text:
        "I had a great experience using this website. It helped me reach the right doctor at the right time.",
      image: vikashImage,
=======
      text: "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
      image: rameshImage,
>>>>>>> 858ff2f30513508742440b20f791896828877a84
    },
    {
      id: 8,
      name: "Iyer",
<<<<<<< HEAD
      text:
        "An excellent healthcare platform. It saved me so much time and effort.",
      image: iyerImage,
=======
      text: "This website is a lifesaver! It helped me identify my symptoms quickly and connected me to a specialist in no time. Highly recommend!",
      image: anitaImage,
>>>>>>> 858ff2f30513508742440b20f791896828877a84
    },
  ];

  const scrollRef = useRef(null);
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
<<<<<<< HEAD

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

=======
  const rafLock = useRef(false);

  const StarRating = () => (
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={Star}
          alt="star"
          className="w-5 h-5 mr-1 text-teal-500"
        />
      ))}
    </div>
  );

  const updateActiveByPosition = () => {
    const container = scrollRef.current;
    const cards = itemRefs.current.filter(Boolean);
    if (!container || cards.length === 0) return;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let nearest = 0;
    let nearestDist = Infinity;
    cards.forEach((el, idx) => {
      const cardCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(containerCenter - cardCenter);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = idx;
      }
    });
>>>>>>> 858ff2f30513508742440b20f791896828877a84
    setActiveIndex(nearest);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

<<<<<<< HEAD
    container.addEventListener("scroll", updateActiveByPosition, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveByPosition);

    return () => {
      container.removeEventListener("scroll", updateActiveByPosition);
=======
    const onScroll = () => {
      if (rafLock.current) return;
      rafLock.current = true;
      requestAnimationFrame(() => {
        const lastCard = itemRefs.current[itemRefs.current.length - 1];
        if (lastCard) {
          const maxScrollLeft = lastCard.offsetLeft;
          if (container.scrollLeft > maxScrollLeft) {
            container.scrollLeft = maxScrollLeft;
          }
        }
        updateActiveByPosition();
        rafLock.current = false;
      });
    };

    updateActiveByPosition();
    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveByPosition);
    return () => {
      container.removeEventListener("scroll", onScroll);
>>>>>>> 858ff2f30513508742440b20f791896828877a84
      window.removeEventListener("resize", updateActiveByPosition);
    };
  }, []);

  const scrollToCard = (index) => {
<<<<<<< HEAD
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
=======
    const container = scrollRef.current;
    const el = itemRefs.current[index];
    if (!container || !el) return;
    container.scrollTo({ left: el.offsetLeft, behavior: "smooth" });
  };

  const dotsCount = Math.ceil(testimonials.length / 2);

  return (
    <div className="min-h-140 py-8 sm:py-7 md:!pt-25 lg:!pb-26 px-4">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-![14px] md:!text-[54px] font-extrabold  text-center mb-8 sm:mb-12 !lg:mb-0"
>>>>>>> 858ff2f30513508742440b20f791896828877a84
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
<<<<<<< HEAD
            <div className="flex space-x-6 w-max">
=======
            <div className="flex space-x-4 sm:space-x-6 w-max">
>>>>>>> 858ff2f30513508742440b20f791896828877a84
              {testimonials.map((t, idx) => (
                <div
                  key={t.id}
                  ref={(el) => (itemRefs.current[idx] = el)}
<<<<<<< HEAD
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
=======
                  className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 duration-300 w-[4%] sm:w-[4%] lg:w-[5.4%] xl:w-[7.4%] flex-shrink-0 mt-[45px] border border-[#BFBFBF]"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <StarRating />
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                    {t.text}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800 text-base sm:text-lg">
                        {t.name}
                      </h3>
                    </div>
>>>>>>> 858ff2f30513508742440b20f791896828877a84
                  </div>
                </div>
              ))}
            </div>
          </div>

<<<<<<< HEAD
          
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
=======
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: dotsCount }).map((_, index) => (
              <div
                key={index}
                onClick={() => scrollToCard(index * 2)}
                className={`cursor-pointer h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  Math.floor(activeIndex / 2) === index
                    ? "bg-teal-600 w-6 sm:w-8"
                    : "bg-gray-300 w-1.5 sm:w-2"
                }`}
                aria-label={`Go to testimonials group ${index + 1}`}
>>>>>>> 858ff2f30513508742440b20f791896828877a84
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide {
<<<<<<< HEAD
            scrollbar-width: none;
            -ms-overflow-style: none;
=======
            -ms-overflow-style: none;
            scrollbar-width: none;
>>>>>>> 858ff2f30513508742440b20f791896828877a84
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
<<<<<<< HEAD
        `}</style>
      </div>
    </section>
=======
          @media (min-width: 640px) {
            .scrollbar-hide::-webkit-scrollbar {
              display: block;
              height: 6px;
            }
            .scrollbar-hide::-webkit-scrollbar-track {
              background: #f1f5f9;
              border-radius: 10px;
            }
            .scrollbar-hide::-webkit-scrollbar-thumb {
              background: #14b8a6;
              border-radius: 10px;
            }
            .scrollbar-hide::-webkit-scrollbar-thumb:hover {
              background: #0f766e;
            }
          }
        `}</style>
      </div>
    </div>
>>>>>>> 858ff2f30513508742440b20f791896828877a84
  );
};

export default TestimonialsCarousel;
<<<<<<< HEAD





=======
>>>>>>> 858ff2f30513508742440b20f791896828877a84
