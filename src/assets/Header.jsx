import About_Dropdown from "./About-Dropdowns";
import Services_Dropdown from "./Services-Dropdowns";
import RSA_Dropdown from "./RSA-Dropdowns ";
import NYR_Dropdown from "./NYR-Dropdowns";
import Flag from "./IMAGES/flag.jpg";
import Logo from "./IMAGES/LOGO.jpeg";
import { ImFacebook2 } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { BiLogoYoutube } from "react-icons/bi";
import { TiUser } from "react-icons/ti";
import { TiUserAdd } from "react-icons/ti";
import { MdVolunteerActivism } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { TfiAngleDown } from "react-icons/tfi";
import { useState } from "react";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { ImLinkedin2 } from "react-icons/im";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = ({ toggleSidebar }) => {
  const [aboutDrop, setAboutDrop] = useState(false);
  const [serviceDrop, setServiceDrop] = useState(false);
  const [RSADrop, setRSADrop] = useState(false);
  const [NYRDrop, setNYRDrop] = useState(false);
  return (
    <section className="w-full h-[20vh] flex flex-col items-start justify-start pt-[5px] bg-[var(--lgreens] gap-2">
      <div className="w-full h-fit flex items-center justify-between 2sm:px-[calc(3%+50px)] px-[30px] md:px-[calc(5%+100px)] xl:px-[calc(8%+100px)]">
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
            National Youth Unemployment (NYUB) <br /> Benefit Scheme
          </motion.h2>
        </span>

        <span className="flex w-fit h-fit items-center justify-center xl:gap-4 md:gap-3 gap-2">
          <div className="flex items-center justify-center xl:gap-2 gap-1 border-[1px] 2sm:border-[var(--dgray)] hover:border-[var(--dgray)] border-transparent 2sm:rounded-md rounded-sm text-[var(--dgreen)] xl:pl-2.5 pl-1.5 xl:py-1.5 pr-1.5 2sm:pr-0 py-1 xl:text-[14px] 2sm:text-[12px] text-[18px] raleway duration-200">
            <HiMagnifyingGlass />
            <input
              type="text"
              placeholder="Search Skills, Course, ..."
              className="px-1 border-none outline-none xl:w-full sm:w-[160px] w-[160px] text-[13px] xl:text-[14px] hidden 2sm:flex bg-transparent"
            />
          </div>

          <motion.button
            className="md:flex hidden items-center justify-center gap-2 border-[1px] border-[var(--lgreen)] rounded-[6px] text-[var(--bg)] xl:px-2.5 px-1.5 xl:py-1.5 py-1 xl:text-[13.5px] md:text-[13px] text-[12px] bg-[var(--lgreen)] duration-300 raleway hover:bg-[var(--bg)] hover:text-[var(--lgreen)]"
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
            className="md:flex hidden items-center justify-center gap-2 border-[1px] border-[var(--lgreen)] rounded-[6px] text-[var(--bg)] xl:px-2.5 px-1.5 xl:py-1.5 py-1 xl:text-[13.5px] md:text-[13px] text-[12px] bg-[var(--lgreen)] duration-300 raleway hover:bg-[var(--bg)] hover:text-[var(--lgreen)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            VOLUNTEER
            <p className="xl:text-[16px] text-[14px] md:flex hidden">
              <MdVolunteerActivism />
            </p>
          </motion.button>

          <Link
            className="md:flex hidden items-center justify-center gap-2 border-[1px] border-[var(--lgreen)] rounded-[6px] text-[var(--bg)] xl:px-2.5 px-1.5 xl:py-1.5 py-1 xl:text-[13.5px] md:text-[13px] text-[12px] bg-[var(--lgreen)] duration-300 raleway hover:bg-[var(--bg)] hover:text-[var(--lgreen)]"
            to="/form"
          >
            REGISTER
            <p className="xl:text-[16px] text-[14px] md:flex hidden">
              <TiUserAdd />
            </p>
          </Link>

          <motion.button
            className="md:flex hidden items-center justify-center gap-2 border-[1px] border-[var(--dgreen)] rounded-[6px] text-[var(--dgreen)] xl:px-2.5 px-1.5 xl:py-1.5 py-1 xl:text-[13.5px] md:text-[13px] text-[12px] hover:bg-[var(--dgreen)] hover:text-[var(--bg)] duration-300 raleway"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.3 }}
          >
            LOGIN
            <p className="xl:text-[16px] text-[14px] md:flex hidden">
              <TiUser />
            </p>
          </motion.button>

          <button
            className="text-[20px] flex md:hidden p-1 border-[1px] border-transparent hover:border-[var(--dgreen)] text-[var(--dgreen)] duration-200 rounded-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            onClick={toggleSidebar}
          >
            <HiMiniBars3BottomRight />
          </button>
        </span>
      </div>

      <div className="w-full h-fit xl:py-1.5 py-1 md:flex hidden items-center md:justify-evenly justify-between xl:gap-6 md:gap-4 gap-3 xl:px-[8%] md:px-[5%] px-[15px] bg-[var(--dgreen)] text-[var(--gray)] robotoCon mt-1.5 xl:text-[15px] text-[13px]">
        <motion.a
          href="#"
          className="robotoCon font-medium flex items-center justify-center gap-2 text-[var(--lgreen)] underline underline-offset-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Home
        </motion.a>
        <motion.a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-1.5 hover:underline underline-offset-4 duration-300 overflow-visible relative"
          onMouseEnter={() => setAboutDrop(true)}
          onMouseLeave={() => setAboutDrop(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          About
          <p className="text-[12px]">
            <TfiAngleDown />
          </p>
          {aboutDrop ? <About_Dropdown /> : <></>}
        </motion.a>
        <motion.a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-1.5 hover:underline underline-offset-4 duration-300 overflow-visible relative"
          onMouseEnter={() => setServiceDrop(true)}
          onMouseLeave={() => setServiceDrop(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Services
          <p className="text-[12px]">
            <TfiAngleDown />
          </p>
          {serviceDrop ? <Services_Dropdown /> : <></>}
        </motion.a>
        <motion.a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-1.5 hover:underline underline-offset-4 duration-300 overflow-visible relative"
          onMouseEnter={() => setRSADrop(true)}
          onMouseLeave={() => setRSADrop(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          RSA
          <p className="text-[12px]">
            <TfiAngleDown />
          </p>
          {RSADrop ? <RSA_Dropdown /> : <></>}
        </motion.a>
        <motion.a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-1.5 hover:underline underline-offset-4 duration-300 overflow-visible relative"
          onMouseEnter={() => setNYRDrop(true)}
          onMouseLeave={() => setNYRDrop(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          NYR
          <p className="text-[12px]">
            <TfiAngleDown />
          </p>
          {NYRDrop ? <NYR_Dropdown /> : <></>}
        </motion.a>
        <motion.a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-2 hover:underline underline-offset-4 duration-300 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Gallery
        </motion.a>
        <motion.a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-2 hover:underline underline-offset-4 duration-300 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Resources
        </motion.a>
        <motion.a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-2 hover:underline underline-offset-4 duration-300 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Partner Map
        </motion.a>
        <motion.a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-2 hover:underline underline-offset-4 duration-300 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Dashboard
        </motion.a>
        <motion.a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-2 hover:underline underline-offset-4 duration-300 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          Blog
        </motion.a>
        <motion.a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-2 hover:underline underline-offset-4 duration-300 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          News
        </motion.a>
        <motion.a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-2 hover:underline underline-offset-4 duration-300 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          Contact
        </motion.a>
      </div>
    </section>
  );
};
export default Header;
