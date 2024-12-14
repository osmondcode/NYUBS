import { useRef } from "react";
import image from "./IMAGES/about_section.jpeg";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef();
  const View = useInView(ref, { twice: true });
  return (
    <section className="w-full min-h-[70vh] lg:px-[8%] px-[5%] flex items-center justify-center ">
      <div className="2sm:w-[90%] w-full flex flex-col-reverse md:flex-row md:items-start items-center justify-evenly gap-7 md:mt-0 mt-[100px]">
        <motion.span
          className="xl:w-[450px] lg:w-[400px] 2sm:w-[350px] w-full xl:h-[350px] lg:h-[300px] h-[250px] bg-blue-300/50 flex flex-col items-center justify-center gap-3 rounded overflow-hidden relative shadow shadow-[#666]"
          initial={{ x: "-20px", y: "30px" }}
          animate={View ? { x: 0, y: 0} : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="loader"></span>
          <img
            src={image}
            alt="About NYUBS image"
            className="w-full h-full object-cover brightness-85 hover:scale-[1.05] duration-500 absolute z-10 top-0 left-0"
          />
        </motion.span>

        <span className="xl:w-[450px] md:w-[350px] sm:w-[80%] w-full xl:h-[350px] h-fit flex flex-col items-start justify-start">
          <motion.div
            className="w-fit h-fit xl:px-3.5 px-3 xl:py-1.5 py-1 bg-[var(--dgreen)] rounded flex items-center justify-center lg:gap-4 gap-6 text-[var(--bg)] xl:mb-[10px] mb-[5px]"
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            animate={View ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            <h2 className="xl:text-[14px] text-[12px]">About NYUBS</h2>
          </motion.div>
          <motion.h1
            className="xl:text-[22px] text-[19px] lg:font-semibold font-medium montserrat text-[var(--dgreen)]"
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            animate={View ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            Empowering Youth, Transforming Futures
          </motion.h1>
          <motion.p
            className="xl:text-[16px] text-[14px] roboto font-light text-justify w-full xl:mt-[12px] mt-[9px] text-[var(--dgray)] xl:leading-7 leading-6"
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            animate={View ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.3 }}
          >
            The National Youth Unemployment Benefits Scheme (NYUBS) is a
            groundbreaking initiative empowering 63.7 million Nigerian youths
            with social support, skills training, and civic engagement
            opportunities. Through innovative programs, it fosters economic
            growth, community development.
          </motion.p>

          <motion.button
            className="w-fit h-fit xl:px-2.5 px-2 xl:py-1.5 py-1 underline bg-transparent border-[1px] border-transparent text-[var(--lgreen)] raleway font-medium hover:border-[var(--dgreen)] hover:text-[var(--dgreen)] duration-300 rounded xl:text-[16px] lg:text-[14px] text-[13px] xl:mt-[30px] mt-[15px]"
            ref={ref}
            initial={{ opacity: 0 }}
            animate={View ? { opacity: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.3 }}
          >
            Learn More
          </motion.button>
        </span>
      </div>
    </section>
  );
};
export default About;
