import React, { useRef, useState } from "react";
import Header from "./FORMS/Forms-header";
import { GoArrowLeft } from "react-icons/go";
import Personal from "./FORMS/Personal-info";
import Personal_II from "./FORMS/Personal-info II";

import Footer from "./Footer";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import SideBar from "./Sidebar";

const Forms = ({ toggleSidebar, sideBar }) => {
  const ref = useRef(null);

  const inView = useInView(ref, { twice: true });

  const [page, setPage] = useState(1);
  const handlePageNext = () => {
    if (page >= 2) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };
  const handlePagePrev = () => {
    setPage(page - 1);
  };
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start gap-2">
      {sideBar && <SideBar toggleSidebar={toggleSidebar} />}
      <Header toggleSidebar={toggleSidebar} />
      {/* Forms */}

      <div className="w-full h-fit flex items-center justify-between xl:px-[10%] md:px-[7%] px-[25px] mt-10">
        <Link
          to="/"
          className="flex items-center justify-start lg:gap-3 gap-2 sm:text-[14px] text-[12.5px] lg:text-[16px]"
        >
          <p className="lg:p-1 p-0.5 lg:text-[15px] text-[14px] rounded lg:rounded-full bg-black/10">
            <GoArrowLeft />
          </p>
          Forms
        </Link>

        <div className="w-fit h-full flex items-center justify-between lg:gap-2 gap-1.5">
          <motion.span
            className={
              page >= 1
                ? "lg:w-[55px] sm:w-[45px] w-[35px] h-[4px] bg-[var(--dgreen)] rounded-3xl"
                : "lg:w-[55px] sm:w-[45px] w-[35px] h-[4px] bg-[var(--gray)] rounded-3xl"
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            ref={ref}
          ></motion.span>
          <motion.span
            className={
              page >= 2
                ? "lg:w-[55px] sm:w-[45px] w-[35px] h-[4px] bg-[var(--dgreen)] rounded-3xl"
                : "lg:w-[55px] sm:w-[45px] w-[35px] h-[4px] bg-[var(--gray)] rounded-3xl"
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            ref={ref}
          ></motion.span>
        </div>
      </div>
      <motion.p
        className="text-[#555] italic mt-3 lg:text-[13.5px] sm:text-[12px] text-[11.5px] text-center mx-2"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        ref={ref}
      >
        Please ensure that all information is filled out accurately and
        completely. Thank you!
      </motion.p>

      {page === 1 ? (
        <Personal handlePageNext={handlePageNext} />
      ) : (
        <Personal_II handlePagePrev={handlePagePrev} />
      )}

      <Footer />
    </div>
  );
};

export default Forms;
