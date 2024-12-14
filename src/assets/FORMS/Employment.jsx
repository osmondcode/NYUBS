import React, { useState, useRef } from "react";
import { TiUser } from "react-icons/ti";
import { ImCloudUpload } from "react-icons/im";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { HiWrenchScrewdriver } from "react-icons/hi2";

const Employment_info = ({handlePagePrev}) => {
  const [fN, setFN] = useState(false);
  const handleLabelFN = () => {
    setFN(!fN);
  };

    const ref = useRef(null);

    const inView = useInView(ref, { twice: true });

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-start sm:px-[30px] px-[15px] md:px-[5%] xl:px-[8%] py-5 mb-10">
      <motion.span
        className="w-fit h-fit lg:px-3 px-2 py-1 lg:text-[14px] text-[12px] montserrat bg-[var(--dgreen)] lg:rounded-md rounded text-[var(--bg)] font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        ref={ref}
      >
        <p>Employment Status</p>
      </motion.span>

        <div className="w-full h-[30vh] flex flex-col items-center justify-center gap-5 text-[110px] text-[#777] mt-10">
            <HiWrenchScrewdriver />
            <p className="text-[14px] text-center">This page is still under construction, check back in the next few hours</p>
        </div>

          <div className="w-full flex items-end justify-end mt-[100px]">
            <button className="w-fit flex items-center justify-center gap-2 px-5 py-1.5 text-[16px] rounded bg-[#6C757D] text-[var(--bg)] font-semibold" onClick={handlePagePrev}>
              Go Back
            </button>
          </div>
        </div>
  );
};

export default Employment_info;
