import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";




const UnderEmployed = () => {
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
        <p>Under-employed Section</p>
      </motion.span>
      <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-7">
        <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
          Are you currently working part-time or in a role below your
          qualifications ?
        </p>

        <span className="flex flex-col gap-3">
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
          What is your average weekly working hours ?
        </p>

        <span className="flex flex-col gap-3">
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Less than 10 hours</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">10-25 hours</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">26-40 hours</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Over 40 hours</p>
          </div>
        </span>
      </div>
      <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-12">
        <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
          What is your monthly income range ?
        </p>

        <span className="flex flex-col gap-3">
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Less than ₦30,000</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">₦30,000 - ₦70,000</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">₦70,000 - ₦100,000</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Over ₦100,000</p>
          </div>
        </span>
      </div>
      <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-12">
        <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
          Would you like to receive business development training to improve
          your skills ?
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
          What type of employment opportunities would you prefer ?
        </p>

        <span className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
          <input type="Checkbox" />
          <p className="text-[15px] text-[var(--dark)]">Onsite - Short Term</p>
        </span>
        <span className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
          <input type="Checkbox" />
          <p className="text-[15px] text-[var(--dark)]">Onsite - Long Term</p>
        </span>
        <span className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
          <input type="Checkbox" />
          <p className="text-[15px] text-[var(--dark)]">Virtual</p>
        </span>
        <span className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
          <input type="Checkbox" />
          <p className="text-[15px] text-[var(--dark)]">Consultancy</p>
        </span>
      </div>
    </div>
  );
};

export default UnderEmployed;
