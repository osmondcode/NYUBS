import { useEffect, useState } from "react";
import Logo from "./IMAGES/LOGO.jpeg";
import { motion } from "framer-motion";

const Preloader = () => {
  const [vanish, setVanish] = useState(
    "bg-[var(--dgreen)] w-full h-screen flex flex-col items-center justify-center gap-7 text-[var(--bg)] fixed z-50 top-0 left-0 roll-up"
  );

  useEffect(() => {
    setTimeout(() => {
      setVanish(
        "bg-[var(--dgreen)] w-full h-screen hidden flex-col items-center justify-center gap-7 text-[var(--bg)] fixed z-50 top-0 left-0 roll-up"
      );
    }, 7200);
  });
  return (
    <section className={vanish}>
      <span className="flex items-center justify-start flex-col text-center lg:gap-3 gap-2">
        <img
          src={Logo}
          alt="LOGO"
          className="xl:w-[35px] w-[27px] xl:h-[35px] h-[27px] object-cover rounded-full cursor-pointer"
        />
        <h2 className="font-semibold blinkTwo text-[14px] lg:text-[16px] raleway">
          National Youth Unemployment Benefits (NYUB) <br /> Scheme
        </h2>
      </span>

      <span className="lg:w-[600px] md:w-[550px] w-full text-[12px] italic flex flex-col gap-2 text-justify mt-[60px] px-3">
        <motion.span
          initial={{ y: 120 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 5 }}
        >
          <motion.p
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="vanish italic"
          >
            A Social Welfare program underpinned by the National Youth Register (NYR) for the Unemployed, Under employed and Self Employed, where 63.7 million youths will be  impacted through  monetary grants, training and civic participation.
          </motion.p>
        
        </motion.span>
      </span>

      <span className="lg:w-[400px] sm:w-[350px] w-[90%] lg:h-[6px] h-[5px] bg-[var(--gray)] rounded-[30px] absolute bottom-[8%] left-auto right-auto z-10 opacity-80 flex fade-down">
        <div className="w-0 h-full rounded-[30px] bg-[var(--lgreen)] loading"></div>
      </span>
    </section>
  );
};
export default Preloader;
