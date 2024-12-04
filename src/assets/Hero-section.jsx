import { GiTeamIdea } from "react-icons/gi";
import { GiChart } from "react-icons/gi";
import { FaPeopleRoof } from "react-icons/fa6";
import imageOne from "./IMAGES/image 1.jpg";
import imageTwo from "./IMAGES/image 2.jpg";
import imageThree from "./IMAGES/image 3.jpeg";
import imageFour from "./IMAGES/image 4.jpg";
import imageFive from "./IMAGES/image 5.png";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Hero_section = () => {
  const ref = useRef();
  const view = useInView(ref, { once: true });

  const Slides = [
    {
      id: 1,
      tagline: "social support",
      icon: <GiTeamIdea />,
      heading: "Empowering Vulnerable Youth",
      body: "Our program provides a safety net for unemployed youth through initiatives like UNTE, ESSI, and YIES, helping them overcome poverty and unemployment.",
      bodyTwo: "",
      CTA_one: "Learn More",
      CTA_two: "Apply Now",
      image: imageOne,
    },
    {
      id: 2,
      tagline: "Capacity Development",
      icon: <GiChart />,
      heading: "Unlockng Potential Through Skills",
      body: "The Renewed Skills Academy (RSA) offers hybrid learning, combining workshops and online courses to prepare youth for success in the job market.",
      bodyTwo: "",
      CTA_one: "Explore Programs",
      CTA_two: "Join RSA Now",
      image: imageTwo,
    },
    {
      id: 3,
      tagline: "",
      icon: "",
      heading: "Monetary Grants",
      body: "The  Scheme's Monetary Grants pillar offers a $500m fund to support 5 million unemployed youths annually. Eligible youth aged 18-39 can apply online (via NYR) or in-person at designated centers. Grants will be disbursed in phases through a transparent and clear process.",
      bodyTwo: "",
      CTA_one: "",
      CTA_two: "",
      image: imageThree,
    },
    {
      id: 4,
      tagline: "Civic Participation",
      icon: <FaPeopleRoof />,
      heading: "Building Communities, Building futures",
      body: "Our program promotes volunteerism and community engagement through volunteer work, rewards for achievements, and affiliate partnerships.",
      bodyTwo: "",
      CTA_one: "",
      CTA_two: "",
      image: imageFour,
    },
    {
      id: 5,
      tagline: "",
      icon: "",
      heading: "Join the NYUBS Movement: Opportunities for All",
      body: "Join the National Youth Unemployment Scheme (NYUBS) today. Are you an unemployed, underemployed, or self-employed youth?",
      bodyTwo:
        "Or are you a voluntary organization, business, or service provider? Even diaspora Nigerians can participate!",
      CTA_one: "",
      CTA_two: "Sign Up Now",
      image: imageFive,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentSlide === 4) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide((prevSlide) =>
          prevSlide === currentSlide - 1 ? 0 : prevSlide + 1
        );
      }
    }, 3000);

    return () => clearTimeout(timeout);
  }, [currentSlide]);

  console.log(currentSlide);
  return (
    <section className="w-full min-h-[80vh] lg:px-[8%] px-[5%] flex items-center justify-center ">
      <div className="w-full flex flex-col md:flex-row md:items-start items-center justify-evenly gap-7 md:pt-0 sm:pt-[80px] pt-[40px]">
        <span className="xl:w-[400px] md:w-[350px] 2sm:w-[80%] w-full xl:h-[380px] lg:h-[350px] md:h-[300px] 2sm:h-[250px] h-[270px] flex flex-col items-start justify-between gap-3">
          <section>
            {Slides[currentSlide].tagline.length <= 0 ? (
              <></>
            ) : (
              <div className="w-fit h-fit xl:px-3.5 px-3 xl:py-1.5 py-1 bg-[var(--dgreen)] rounded flex items-center justify-center lg:gap-4 gap-6 text-white capitalize xl:text-[15px] lg:text-[14px] text-[12px] xl:mb-[15px] mb-[10px]">
                <h2 className="2sm:text-[14px] lg:text-[13px] text-[12px]">
                  {Slides[currentSlide].tagline}
                </h2>
                <p>{Slides[currentSlide].icon}</p>
              </div>
            )}
            <motion.h1
              className="xl:text-[24px] lg:text-[22px] text-[20px] lg:font-semibold font-medium montserrat text-[var(--dgreen)]"
              initial={{ x: -45, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {Slides[currentSlide].heading}
            </motion.h1>
            <motion.p
              className="xl:text-[17px] lg:text-[16px] text-[15px] roboto font-light text-justify w-full lg:mt-[20px] mt-[12px] text-[var(--dgray)]"
              initial={{ x: -45, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              {Slides[currentSlide].body}
            </motion.p>
            <motion.p
              className="xl:text-[17px] lg:text-[16px] text-[15px] roboto font-light text-justify w-full lg:mt-[20px] mt-[12px] text-[var(--dgray)]"
              initial={{ x: -45, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              {Slides[currentSlide].bodyTwo}
            </motion.p>
          </section>

          <div className="w-full flex items-center justify-start xl:gap-10 lg:gap-8 gap-6">
            {Slides[currentSlide].CTA_one.length <= 0 ? (
              <></>
            ) : (
              <motion.button
                className="w-fit h-fit xl:px-2.5 px-2 xl:py-1.5 py-1 underline bg-transparent border-[1px] border-transparent text-[var(--lgreen)] raleway font-medium hover:border-[var(--dgreen)] hover:text-[var(--dgreen)] duration-300 rounded xl:text-[16px] lg:text-[15px] text-[14px]"
                initial={{ y: 45, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
              >
                {Slides[currentSlide].CTA_one}
              </motion.button>
            )}
            {Slides[currentSlide].CTA_two.length <= 0 ? (
              <></>
            ) : (
              <motion.button
                className="w-fit h-fit xl:px-2.5 px-2 xl:py-1.5 py-1 bg-[var(--lgreen)] border-[1px] border-[var(--lgreen)] text-[var(--bg)] raleway font-medium hover:bg-[var(--bg)] hover:text-[var(--lgreen)] duration-300 rounded xl:text-[16px] lg:text-[15px] text-[14px]"
                initial={{ y: 45, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                {Slides[currentSlide].CTA_two}
              </motion.button>
            )}
          </div>
        </span>

        <span className="xl:w-[550px] lg:w-[500px] 2sm:w-[400px] w-full xl:h-[380px] lg:h-[350px] h-[300px] bg-blue-300/50 flex flex-col items-center justify-center gap-3 rounded overflow-hidden relative shadow-md shadow-[#555]">
          <img
            src={Slides[currentSlide].image}
            alt={Slides[currentSlide].heading}
            className="w-full h-full object-cover duration-1000 hover:scale-[1.05] brightness-90 flex items-center justify-center"
          />

          <div className="w-fit h-fit flex items-center justify-center gap-3 absolute z-20 lg:bottom-5 bottom-3">
            <motion.span
              className={
                currentSlide === 0
                  ? "lg:w-[22px] w-[20px] lg:h-[10px] h-[8px] bg-[var(--lgreen)] rounded-[20px] duration-500"
                  : "lg:w-[22px] w-[20px] lg:h-[10px] h-[8px] bg-[var(--gray)] rounded-[20px] duration-500"
              }
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            ></motion.span>
            <motion.span
              className={
                currentSlide === 1
                  ? "lg:w-[22px] w-[20px] lg:h-[10px] h-[8px] bg-[var(--lgreen)] rounded-[20px] duration-500"
                  : "lg:w-[22px] w-[20px] lg:h-[10px] h-[8px] bg-[var(--gray)] rounded-[20px] duration-500"
              }
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            ></motion.span>
            <motion.span
              className={
                currentSlide === 2
                  ? "lg:w-[22px] w-[20px] lg:h-[10px] h-[8px] bg-[var(--lgreen)] rounded-[20px] duration-500"
                  : "lg:w-[22px] w-[20px] lg:h-[10px] h-[8px] bg-[var(--gray)] rounded-[20px] duration-500"
              }
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            ></motion.span>
            <motion.span
              className={
                currentSlide === 3
                  ? "lg:w-[22px] w-[20px] lg:h-[10px] h-[8px] bg-[var(--lgreen)] rounded-[20px] duration-500"
                  : "lg:w-[22px] w-[20px] lg:h-[10px] h-[8px] bg-[var(--gray)] rounded-[20px] duration-500"
              }
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            ></motion.span>
            <motion.span
              className={
                currentSlide === 4
                  ? "lg:w-[22px] w-[20px] lg:h-[10px] h-[8px] bg-[var(--lgreen)] rounded-[20px] duration-500"
                  : "lg:w-[22px] w-[20px] lg:h-[10px] h-[8px] bg-[var(--gray)] rounded-[20px] duration-500"
              }
              initial={{ y: 35, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            ></motion.span>
          </div>
        </span>
      </div>
    </section>
  );
};

export default Hero_section;
