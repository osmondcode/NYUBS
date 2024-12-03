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

const Header = () => {
  const [aboutDrop, setAboutDrop] = useState(false);
  const [serviceDrop, setServiceDrop] = useState(false);
  const [RSADrop, setRSADrop] = useState(false);
  const [NYRDrop, setNYRDrop] = useState(false);
  return (
    <section className="w-full h-[20vh] flex flex-col items-start justify-start pt-[5px] bg-[var(--lgreens] gap-2">
      <div className="w-full h-fit flex items-center justify-between 2sm:px-[calc(3%+50px)] px-[30px] md:px-[calc(5%+100px)] xl:px-[calc(8%+100px)]">
        <span className="w-fit border-[0.5px] border-[var(--gray)] h-fit flex items-center justify-center overflow-hidden">
          <img
            src={Flag}
            alt="flag"
            className="md:w-[25px] w-[20px] md:h-[20px] h-[15px] object-contain"
          />
        </span>

        <span className="w-fit h-fit flex items-center justify-center gap-4 text-[var(--dgreen)]">
          <button className="md:text-[16.5px] text-[14px] hover:text-[var(--lgreen)] duration-300">
            <ImFacebook2 />
          </button>
          <button className="md:text-[16.5px] text-[14px] hover:text-[var(--lgreen)] duration-300">
            <RiTwitterXFill />
          </button>
          <button className="md:text-[16.5px] text-[14px] hover:text-[var(--lgreen)] duration-300">
            <GrInstagram />
          </button>
          <button className="md:text-[20px] text-[18px] hover:text-[var(--lgreen)] duration-300">
            <BiLogoYoutube />
          </button>
        </span>
      </div>

      <div className="w-full h-fit flex items-center justify-between mt-[5px] xl:px-[8%] px-[3%]">
        <span className="flex items-center justify-start gap-2">
          <div className="w-fit h-fit rounded-full">
            <img
              src={Logo}
              alt="LOGO"
              className="xl:w-[40px] lg:w-[35px] 2sm:w-[30px] w-[27px] xl:h-[40px] lg:h-[35px] 2sm:h-[30px] h-[27px] object-cover rounded-full"
            />
          </div>

          <h2 className="xl:font-bold 2sm:font-semibold font-medium xl:text-[15px] lg:text-[14px] 2sm:text-[13px] text-[12px] 2sm:leading-[18px] leading-[16px]">
            National Youth Enemployent <br /> Benefit Schene
          </h2>
        </span>

        <span className="flex w-fit h-fit items-center justify-center xl:gap-4 md:gap-3 gap-2">
          <div className="flex items-center justify-center xl:gap-2 gap-1 border-[1px] 2sm:border-[var(--dgray)] hover:border-[var(--dgray)] border-transparent 2sm:rounded-md rounded-sm text-[var(--dgreen)] xl:pl-2.5 pl-1.5 xl:py-1.5 pr-1.5 2sm:pr-0 py-1 xl:text-[14px] 2sm:text-[12px] text-[18px] raleway duration-200">
            <HiMagnifyingGlass />
            <input
              type="text"
              placeholder="Search Skills, Course, ..."
              className="px-1 border-none outline-none xl:w-full sm:w-[120px] w-[160px] text-[13px] xl:text-[14px] hidden 2sm:flex bg-transparent"
            />
          </div>

          <button className="sm:flex hidden items-center justify-center gap-2 border-[1px] border-[var(--lgreen)] rounded-[6px] text-[var(--bg)] xl:px-2.5 px-1.5 xl:py-1.5 py-1 xl:text-[13.5px] md:text-[13px] text-[12px] bg-[var(--lgreen)] duration-300 raleway hover:bg-[var(--bg)] hover:text-[var(--lgreen)]">
            DONATE
            <p className="xl:text-[16px] text-[14px] md:flex hidden">
              <FaHandHoldingUsd />
            </p>
          </button>

          <button className="sm:flex hidden items-center justify-center gap-2 border-[1px] border-[var(--lgreen)] rounded-[6px] text-[var(--bg)] xl:px-2.5 px-1.5 xl:py-1.5 py-1 xl:text-[13.5px] md:text-[13px] text-[12px] bg-[var(--lgreen)] duration-300 raleway hover:bg-[var(--bg)] hover:text-[var(--lgreen)]">
            VOLUNTEER
            <p className="xl:text-[16px] text-[14px] md:flex hidden">
              <MdVolunteerActivism />
            </p>
          </button>

          <button className="sm:flex hidden items-center justify-center gap-2 border-[1px] border-[var(--lgreen)] rounded-[6px] text-[var(--bg)] xl:px-2.5 px-1.5 xl:py-1.5 py-1 xl:text-[13.5px] md:text-[13px] text-[12px] bg-[var(--lgreen)] duration-300 raleway hover:bg-[var(--bg)] hover:text-[var(--lgreen)]">
            REGISTER
            <p className="xl:text-[16px] text-[14px] md:flex hidden">
              <TiUserAdd />
            </p>
          </button>

          <button className="sm:flex hidden items-center justify-center gap-2 border-[1px] border-[var(--dgreen)] rounded-[6px] text-[var(--dgreen)] xl:px-2.5 px-1.5 xl:py-1.5 py-1 xl:text-[13.5px] md:text-[13px] text-[12px] hover:bg-[var(--dgreen)] hover:text-[var(--bg)] duration-300 raleway">
            LOGIN
            <p className="xl:text-[16px] text-[14px] md:flex hidden">
              <TiUser />
            </p>
          </button>

          <button className="text-[20px] flex sm:hidden p-1 border-[1px] border-transparent hover:border-[var(--dgreen)] text-[var(--dgreen)] duration-200 rounded-sm">
            <HiMiniBars3BottomRight />
          </button>
        </span>
      </div>

      <div className="w-full h-fit xl:py-1.5 py-1 sm:flex hidden items-center md:justify-evenly justify-between xl:gap-6 md:gap-4 gap-3 xl:px-[8%] md:px-[5%] px-[15px] bg-[var(--dgreen)] text-[var(--gray)] robotoCon mt-1.5 xl:text-[15px] text-[13px]">
        <a
          href="#"
          className="robotoCon font-medium flex items-center justify-center gap-2 text-[var(--lgreen)] underline underline-offset-4"
        >
          Home
        </a>
        <a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-1.5 hover:underline underline-offset-4 duration-300 overflow-visible relative"
          onMouseEnter={() => setAboutDrop(true)}
          onMouseLeave={() => setAboutDrop(false)}
        >
          About
          <p className="text-[12px]">
            <TfiAngleDown />
          </p>
          {aboutDrop ? <About_Dropdown /> : <></>}
        </a>
        <a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-1.5 hover:underline underline-offset-4 duration-300 overflow-visible relative"
          onMouseEnter={() => setServiceDrop(true)}
          onMouseLeave={() => setServiceDrop(false)}
        >
          Services
          <p className="text-[12px]">
            <TfiAngleDown />
          </p>
          {serviceDrop ? <Services_Dropdown /> : <></>}
        </a>
        <a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-1.5 hover:underline underline-offset-4 duration-300 overflow-visible relative"
          onMouseEnter={() => setRSADrop(true)}
          onMouseLeave={() => setRSADrop(false)}
        >
          RSA
          <p className="text-[12px]">
            <TfiAngleDown />
          </p>
          {RSADrop ? <RSA_Dropdown /> : <></>}
        </a>
        <a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-1.5 hover:underline underline-offset-4 duration-300 overflow-visible relative"
          onMouseEnter={() => setNYRDrop(true)}
          onMouseLeave={() => setNYRDrop(false)}
        >
          NYR
          <p className="text-[12px]">
            <TfiAngleDown />
          </p>
          {NYRDrop ? <NYR_Dropdown /> : <></>}
        </a>
        <a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-2 hover:underline underline-offset-4 duration-300 "
        >
          Gallery
        </a>
        <a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-2 hover:underline underline-offset-4 duration-300 "
        >
          Resources
        </a>
        <a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-2 hover:underline underline-offset-4 duration-300 "
        >
          Partner Map
        </a>
        <a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-2 hover:underline underline-offset-4 duration-300 "
        >
          Dashboard
        </a>
        <a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-2 hover:underline underline-offset-4 duration-300 "
        >
          Blog
        </a>
        <a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-2 hover:underline underline-offset-4 duration-300 "
        >
          News
        </a>
        <a
          href="#"
          className="robotoCon font-normal flex items-center justify-center gap-2 hover:underline underline-offset-4 duration-300 "
        >
          Contact
        </a>
      </div>
    </section>
  );
};
export default Header;
