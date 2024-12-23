import { useInView, motion } from "framer-motion";
import image1 from "./IMAGES/A.jpg";
import image2 from "./IMAGES/B.png";
import image3 from "./IMAGES/C.jpg";
import image4 from "./IMAGES/D.jpeg";
import image5 from "./IMAGES/E.jpg";
import image6 from "./IMAGES/F.png";
import React, { useEffect, useRef, useState } from "react";

const Newsletter = () => {
  const array1 = [
    {
      id: 1,
      img: image1,
      body: "NYUBS empowers unemployed youth with practical skills for brighter futures. We build self-reliant individuals contributing positively to their communities.",
    },
    {
      id: 2,
      img: image2,
      body: "NYUBS provides unemployed youth with the tools to succeed, promoting self-reliance and brighter futures that benefit both the individuals and their communities.",
    },
    {
      id: 3,
      img: image3,
      body: "Empowering unemployed youth with relevant skills, NYUBS helps them secure brighter futures while encouraging them to become pillars of their communities.",
    },
    {
      id: 4,
      img: image4,
      body: "NYUBS invests in the future of unemployed youth by offering practical training that cultivates self-reliance and enhances community development.",
    },
    {
      id: 5,
      img: image5,
      body: "We at NYUBS dedicate ourselves to training unemployed youth with practical skills, fostering independence, and creating brighter opportunities for community growth.",
    },
  ];
  const array2 = [
    {
      id: 1,
      img: image6,
      body: "At NYUBS, we focus on imparting practical skills to unemployed youth, enabling them to achieve brighter prospects and contribute meaningfully to their communities.",
    },
    {
      id: 2,
      img: image5,
      body: "NYUBS transforms unemployed youth by equipping them with valuable skills, inspiring self-reliance and empowering them to give back to their communities.",
    },
    {
      id: 3,
      img: image4,
      body: "We at NYUBS dedicate ourselves to training unemployed youth with practical skills, fostering independence, and creating brighter opportunities for community growth.",
    },
    {
      id: 4,
      img: image2,
      body: "NYUBS invests in the future of unemployed youth by offering practical training that cultivates self-reliance and enhances community development.",
    },
    {
      id: 5,
      img: image3,
      body: "We at NYUBS dedicate ourselves to training unemployed youth with practical skills, fostering independence, and creating brighter opportunities for community growth.",
    },
  ];
  const array3 = [
    {
      id: 1,
      img: image5,
      body: "We at NYUBS dedicate ourselves to training unemployed youth with practical skills, fostering independence, and creating brighter opportunities for community growth.",
    },
    {
      id: 2,
      img: image1,
      body: "By providing unemployed youth with essential skills, NYUBS helps them build brighter futures and become self-reliant, positively impacting their surroundings.",
    },
    {
      id: 3,
      img: image3,
      body: "NYUBS equips unemployed youth with hands-on skills, paving the way for a brighter future. Our mission is to foster self-reliance and empower individuals to uplift their communities.",
    },
    {
      id: 4,
      img: image6,
      body: "Empowering unemployed youth with relevant skills, NYUBS helps them secure brighter futures while encouraging them to become pillars of their communities.",
    },
    {
      id: 5,
      img: image2,
      body: "At NYUBS, we focus on imparting practical skills to unemployed youth, enabling them to achieve brighter prospects and contribute meaningfully to their communities.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const interval = 5000;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % array1.length);
    }, interval);

    return () => clearInterval(slideInterval);
    console.log(currentIndex);
  }, [array1.length, interval]);

  const ref = useRef(null);
  const Veiw = useInView(ref, { twice: true });

  return (
    <section className="w-full min-h-[70vh] lg:px-[8%] md:px-[5%] px-[20px] my-[100px] flex flex-col items-center justify-start">
      <h1 className="raleway font-bold text-[20px] text-[var(--dgreen)] mb-[25px] md:w-[87%] w-[90%] mx-[30px] md:mx-0">
        RECENT NEWS
      </h1>

      <div className="md:w-[90%] w-full h-fit flex items-center justify-around gap-5 flex-wrap">
        <motion.span
          className="2sm:w-[280px] w-[260px] h-[380px] bg-[var(--llgreen)] rounded-md p-2 overflow-hidden relative flex flex-col justify-between shadow-sm shadow-[#777]"
          ref={ref}
          initial={{ y: 50 }}
          animate={Veiw ? { y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden relative">
            <div className="loader my-[74px]"></div>
            <img
              src={array1[currentIndex].img}
              alt="News image"
              className="w-[95%] h-[150px] object-cover brightness-90 hover:scale-[1.05] duration-500 cursor-pointer shadow shadow-[#666] absolute top-7 left-auto right-auto z-10"
            />
            <p className="w-full text-[15px] text-justify font-light roboto mt-[15px] text-[var(--dark)] h-[160px] overflow-visible">
              {array1[currentIndex].body}
            </p>
          </div>
          <div className="w-full h-fit  flex mt-[30px] mb-[10px] items-end justify-end">
            <button className="w-fit h-fit px-2 py-1 text-[12px] rounded-[2px] bg-[var(--lgreen)] raleway font-medium text-[var(--bg)] hover:bg-transparent border-[0.5px] border-[var(--lgreen)] hover:border-[var(--dgreen)] hover:text-[var(--dgreen)] duration-300 shadow shadow-[#999]">
              Read More
            </button>
          </div>
        </motion.span>

        <motion.span
          className="2sm:w-[280px] w-[260px] h-[380px] bg-[var(--llgreen)] rounded-md p-2 overflow-hidden relative flex flex-col justify-between shadow-sm shadow-[#777]"
          ref={ref}
          initial={{ y: 50 }}
          animate={Veiw ? { y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="w-full h-fit mt-[20px] flex flex-col items-center justify-center overflow-hidden">
            <img
              src={array2[currentIndex].img}
              alt="News image"
              className="w-full h-[150px] object-cover brightness-90 hover:scale-[1.05] duration-500 cursor-pointer shadow shadow-[#666]"
            />
            <p className="w-full text-[15px] text-justify font-light roboto mt-[15px] text-[var(--dark)]">
              {array2[currentIndex].body}
            </p>
          </div>
          <div className="w-full h-fit  flex mt-[30px] mb-[10px] items-end justify-end">
            <button className="w-fit h-fit px-2 py-1 text-[12px] rounded-[2px] bg-[var(--lgreen)] raleway font-medium text-[var(--bg)] hover:bg-transparent border-[0.5px] border-[var(--lgreen)] hover:border-[var(--dgreen)] hover:text-[var(--dgreen)] duration-300 shadow shadow-[#999]">
              Read More
            </button>
          </div>
        </motion.span>

        <motion.span
          className="2sm:w-[280px] w-[260px] h-[380px] bg-[var(--llgreen)] rounded-md p-2 overflow-hidden relative flex flex-col justify-between shadow-sm shadow-[#777]"
          ref={ref}
          initial={{ y: 50 }}
          animate={Veiw ? { y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="w-full h-fit mt-[20px] flex flex-col items-center justify-center overflow-hidden">
            <img
              src={array3[currentIndex].img}
              alt="News image"
              className="w-full h-[150px] object-cover brightness-90 hover:scale-[1.05] duration-500 cursor-pointer shadow shadow-[#666]"
            />
            <p className="w-full text-[15px] text-justify font-light roboto mt-[15px] text-[var(--dark)]">
              {array3[currentIndex].body}
            </p>
          </div>
          <div className="w-full h-fit  flex mt-[30px] mb-[10px] items-end justify-end">
            <button className="w-fit h-fit px-2 py-1 text-[12px] rounded-[2px] bg-[var(--lgreen)] raleway font-medium text-[var(--bg)] hover:bg-transparent border-[0.5px] border-[var(--lgreen)] hover:border-[var(--dgreen)] hover:text-[var(--dgreen)] duration-300 shadow shadow-[#999]">
              Read More
            </button>
          </div>
        </motion.span>
      </div>
    </section>
  );
};
export default Newsletter;
