import React from 'react'
import { motion } from "framer-motion";
import Flag from "../IMAGES/flag.jpg";
import Logo from "../IMAGES/LOGO.jpeg";
import { ImFacebook2 } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { BiLogoYoutube } from "react-icons/bi";
import { ImLinkedin2 } from "react-icons/im";

import { TiUser } from "react-icons/ti";
import { TiUserAdd } from "react-icons/ti";
import { MdVolunteerActivism } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Forms_header = ({ toggleSidebar }) => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-start pt-3">
      <div className="w-full h-fit flex items-center justify-between 2sm:px-[calc(3%+50px)] px-[30px] md:px-[calc(5%+100px)] xl:px-[calc(8%+100px)] mb-1">
        <motion.span
          className="w-fit border-[0.5px] border-[var(--gray)] h-fit flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <img
            src={Flag}
            alt="flag"
            className="md:w-[25px] w-[20px] md:h-[20px] h-[15px] object-contain"
          />
        </motion.span>

        <span className="w-fit h-fit flex items-center justify-center gap-4 text-[var(--dgreen)]">
          <motion.button
            className="md:text-[16.5px] text-[14px] hover:text-[var(--lgreen)] duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <ImFacebook2 />
          </motion.button>
          <motion.button
            className="md:text-[16.5px] text-[14px] hover:text-[var(--lgreen)] duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <RiTwitterXFill />
          </motion.button>
          <motion.button
            className="md:text-[16.5px] text-[14px] hover:text-[var(--lgreen)] duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <GrInstagram />
          </motion.button>
          <motion.button
            className="md:text-[20px] text-[18px] hover:text-[var(--lgreen)] duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <BiLogoYoutube />
          </motion.button>
          <motion.button
            className="md:text-[16.5px] text-[14px] hover:text-[var(--lgreen)] duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <ImLinkedin2 />
          </motion.button>
        </span>
      </div>

      <div className="w-full h-fit flex items-center justify-between mt-[5px] xl:px-[8%] px-[3%]">
        <span className="flex items-center justify-start gap-2">
          <motion.div
            className="w-fit h-fit rounded-full"
            initial={{ x: "-45px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <img
              src={Logo}
              alt="LOGO"
              className="xl:w-[40px] lg:w-[35px] 2sm:w-[30px] w-[27px] xl:h-[40px] lg:h-[35px] 2sm:h-[30px] h-[27px] object-cover rounded-full"
            />
          </motion.div>

          <motion.h2
            className="xl:font-bold 2sm:font-semibold font-medium xl:text-[15px] lg:text-[14px] 2sm:text-[13px] text-[12px] 2sm:leading-[18px] leading-[16px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            National Youth Unemployment <br /> Benefit Scheme
          </motion.h2>
        </span>

        <span className="flex w-fit h-fit items-center justify-center xl:gap-4 md:gap-3 gap-2">
          <motion.button
            className="sm:flex hidden items-center justify-center gap-2 border-[1px] border-[var(--lgreen)] rounded-[6px] text-[var(--bg)] xl:px-2.5 px-1.5 xl:py-1.5 py-1 xl:text-[13.5px] md:text-[13px] text-[12px] bg-[var(--lgreen)] duration-300 raleway hover:bg-[var(--bg)] hover:text-[var(--lgreen)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            DONATE
            <p className="xl:text-[16px] text-[14px] md:flex hidden">
              <FaHandHoldingUsd />
            </p>
          </motion.button>

          <motion.button
            className="sm:flex hidden items-center justify-center gap-2 border-[1px] border-[var(--lgreen)] rounded-[6px] text-[var(--bg)] xl:px-2.5 px-1.5 xl:py-1.5 py-1 xl:text-[13.5px] md:text-[13px] text-[12px] bg-[var(--lgreen)] duration-300 raleway hover:bg-[var(--bg)] hover:text-[var(--lgreen)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            VOLUNTEER
            <p className="xl:text-[16px] text-[14px] md:flex hidden">
              <MdVolunteerActivism />
            </p>
          </motion.button>

          <motion.button
            className="sm:flex hidden items-center justify-center gap-2 border-[1px] border-[var(--dgreen)] rounded-[6px] text-[var(--dgreen)] xl:px-2.5 px-1.5 xl:py-1.5 py-1 xl:text-[13.5px] md:text-[13px] text-[12px] hover:bg-[var(--dgreen)] hover:text-[var(--bg)] duration-300 raleway"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          >
            LOGIN
            <p className="xl:text-[16px] text-[14px] md:flex hidden">
              <TiUser />
            </p>
          </motion.button>

          <motion.button
            className="text-[20px] flex sm:hidden p-1 border-[1px] border-transparent hover:border-[var(--dgreen)] text-[var(--dgreen)] duration-200 rounded-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            onClick={toggleSidebar}
          >
            <HiMiniBars3BottomRight />
          </motion.button>
        </span>
      </div>
    </div>
  );
};

export default Forms_header