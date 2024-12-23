import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const SelfEmployed = () => {
  const [fN, setFN] = useState(false);
  const handleLabelFN = () => {
    setFN(!fN);
  };

  const ref = useRef(null);

  const inView = useInView(ref, { twice: true });

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-start mt-10 py-5 border-t-[1.4px] border-[var(--border)]">
      <motion.span
        className="w-fit h-fit lg:px-3 px-2 py-1 lg:text-[14px] text-[12px] montserrat bg-[var(--gray)] rounded text-[var(--dark)] translate-y-[-32px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        ref={ref}
      >
        <p>Self-employed Section</p>
      </motion.span>
      <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-7">
        <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
          How long have you been self-employed ?
        </p>

        <span className="flex flex-col gap-3">
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Less than 1 year</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">1 - 3 years</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">3 - 5 years</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">More than 5 years</p>
          </div>
        </span>
      </div>
      <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-12">
        <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
          What type of business are you currently running ?
        </p>

        <span className="flex flex-col gap-3">
          <form className="flex items-start justify-start flex-col sm:w-fit w-full h-fit ">
            <input
              type="text"
              className="text-[14px] px-4 py-2 rounded sm:w-[280px] w-full outline-none border-[1px] border-[var(--border)] bg-[var(--light)]"
              placeholder="e.g.., retail, service...etc."
            />
          </form>
        </span>
      </div>
      <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-12">
        <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
          What is your primary challenge in running your business ?
        </p>

        <span className="flex flex-col gap-3">
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="checkbox" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Acces to funding</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="checkbox" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">
              Lack of market access
            </p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="checkbox" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Business Skills</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="checkbox" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Equipment</p>
          </div>
        </span>
      </div>
      <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-12">
        <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
          Would you be interested in mentorship or business grants ?
        </p>

        <span className="flex gap-4">
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Yes</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">No</p>
          </div>
        </span>
      </div>

      <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-12">
        <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
          Do you have a business plan ?
        </p>

        <span className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
          <input type="radio" className="scale-[1.3]" />

          <p className="text-[15px] text-[var(--dark)]">Yes</p>
        </span>
        <span className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
          <input type="radio" className="scale-[1.3]" />

          <p className="text-[15px] text-[var(--dark)]">No</p>
        </span>
      </div>

      <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-12">
        <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
          what is the estimated capital required to scale your business ?
        </p>

        <span className="flex flex-col gap-3">
          <form className="flex items-start justify-start flex-col sm:w-fit w-full h-fit ">
            <input
              type="text"
              className="text-[14px] px-4 py-2 rounded sm:w-[250px] w-full outline-none border-[1px] border-[var(--border)] bg-[var(--light)]"
              placeholder="Enter an amount"
            />
          </form>
        </span>
      </div>
    </div>
  );
};

export default SelfEmployed;
