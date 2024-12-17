import React, { useState, useRef } from "react";
import { TiUser } from "react-icons/ti";
import { ImCloudUpload } from "react-icons/im";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { HiWrenchScrewdriver } from "react-icons/hi2";

const Unemployed = ({handlePagePrev}) => {
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
        <p>Unemployed Section</p>
      </motion.span>
      <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-7">
        <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
          How long have you been unemployed
        </p>

        <span className="flex flex-col gap-3">
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Less than 6 months</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">6-12 months</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">1-2 years</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">2-5 years</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Over 5 years</p>
          </div>
        </span>
      </div>
      <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-12">
        <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
          Highest level of education
        </p>

        <span className="flex flex-col gap-3">
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">
              No formal education
            </p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Primary</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Secondary</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">
              Tertiary{" "}
              <span className="font-light text-[#777]">
                (Bachelor’s, Master’s, PH.D, Diploma, Certificate, OND, HND,
                etc.)
              </span>
            </p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Over 5 years</p>
          </div>
        </span>
      </div>
      <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-12">
        <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
          What type of job do you seek ?
        </p>

        <span className="flex flex-col gap-3">
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Blue collar</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">White collar</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">
              Artisan / Craftsman
            </p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Apprentice</p>
          </div>
          <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
            <input type="radio" className="scale-[1.3]" />
            <p className="text-[15px] text-[var(--dark)]">Internship</p>
          </div>
        </span>
      </div>
      <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-12">
        <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
          Are you interested in vocational training programs ?
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
          What skill (s) will help you become employed ?
        </p>

        <span className="flex items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Add a skill"
            className="sm:text-[14px] text-[12.5px] sm:px-4 px-2 py-2 rounded sm:w-[250px] w-[200px] outline-none border-[1px] border-[var(--border)] bg-[var(--light)] text-[#666]"
          />
          <button className="w-fit flex items-center justify-center gap-2 sm:px-4 px-2 py-2 text-[12.5px] sm:text-[14px] rounded bg-[var(--dgreen)] text-[var(--bg)] font-semibold">
            Add
          </button>
        </span>
      </div>

      <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-12">
        <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
          Skill (s)
        </p>

        <span className="flex items-center justify-center gap-4 hover:font-semibold hover:text-[var(--dgreen)] duration-200 cursor-pointer">
          <input type="checkbox" className="scale-[1.3]" />
          <p className="text-[15px] text-[var(--dark)]">IT Skills</p>
        </span>
        <span className="flex items-center justify-center gap-4 hover:font-semibold hover:text-[var(--dgreen)] duration-200 cursor-pointer">
          <input type="checkbox" className="scale-[1.3]" />
          <p className="text-[15px] text-[var(--dark)]">
            Entrepreneurial skills
          </p>
        </span>
        <span className="flex items-center justify-center gap-4 hover:font-semibold hover:text-[var(--dgreen)] duration-200 cursor-pointer">
          <input type="checkbox" className="scale-[1.3]" />
          <p className="text-[15px] text-[var(--dark)]">Communication skills</p>
        </span>
        <span className="flex items-center justify-center gap-4 hover:font-semibold hover:text-[var(--dgreen)] duration-200 cursor-pointer">
          <input type="checkbox" className="scale-[1.3]" />
          <p className="text-[15px] text-[var(--dark)]">Leadership skills </p>
        </span>
        <span className="flex items-center justify-center gap-4 hover:font-semibold hover:text-[var(--dgreen)] duration-200 cursor-pointer">
          <input type="checkbox" className="scale-[1.3]" />
          <p className="text-[15px] text-[var(--dark)]">Technical skills </p>
        </span>
        <span className="flex items-center justify-center gap-4 hover:font-semibold hover:text-[var(--dgreen)] duration-200 cursor-pointer">
          <input type="checkbox" className="scale-[1.3]" />
          <p className="text-[15px] text-[var(--dark)]">
            Other <span className="font-light text-[#777]">(Specify)</span>
          </p>
        </span>
      </div>
    </div>
  );
};

export default Unemployed;
