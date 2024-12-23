import Logo from "./IMAGES/LOGO.jpeg";
import { LuBellRing } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";

const Footer = () => {
  const [subscribe, setSubscribe] = useState(false);

  return (
    <section className="w-full min-h-[50vh] bg-[var(--dgreen)] text-[var(--bg)] lg:px-[8%] md:px-[5%] px-[30px] pt-[30px] pb-[50px] md:pb-0 flex items-start md:justify-around justify-between relative overflow-hidden flex-wrap gap-5">
      <div className="w-fit flex flex-col items-start justify-start md:gap-7 gap-4">
        <span className="w-fit flex items-center gap-2">
          <div className="md:w-[27px] w-[22px] md:h-[27px] h-[22px] rounded-full">
            <img
              src={Logo}
              alt="LOGO"
              className="w-full h-full rounded-full flex items-center justify-center object-cover"
            />
          </div>
          <h2 className="font-semibold md:text-[17px] text-[14px] poppins">
            NYUBS
          </h2>
        </span>

        <div className="w-fit flex flex-col gap-2 md:text-[13px] text-[11px] text-[var(--gray)] ml-1">
          <p className="raleway underline underline-offset-[6px] font-light hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            Home
          </p>
          <p className="raleway underline underline-offset-[6px] font-light  hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            About
          </p>
          <p className="raleway underline underline-offset-[6px] font-light  hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            Services
          </p>
          <p className="raleway underline underline-offset-[6px] font-light  hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            RSA
          </p>
          <p className="raleway underline underline-offset-[6px]  hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            NYR
          </p>
          <p className="raleway underline underline-offset-[6px] font-light  hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            Gallery
          </p>
        </div>
      </div>

      <div className="w-fit flex flex-col items-start justify-start md:gap-7 gap-4">
        <span className="w-fit flex items-center gap-2">
          <h2 className="font-semibold md:text-[17px] text-[14px] poppins">
            Other Links
          </h2>
        </span>

        <div className="w-fit flex flex-col gap-2 md:text-[13px] text-[11px] text-[var(--gray)] ml-1">
          <p className="raleway underline underline-offset-[6px] font-light hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            Recources
          </p>
          <p className="raleway underline underline-offset-[6px] font-light hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            Partner Map
          </p>
          <p className="raleway underline underline-offset-[6px] font-light hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            Dashboard
          </p>
          <p className="raleway underline underline-offset-[6px] font-light hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            Blog
          </p>
          <p className="raleway underline underline-offset-[6px] font-light hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            News
          </p>
          <p className="raleway underline underline-offset-[6px] font-light hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            Contact
          </p>
        </div>
      </div>

      <div className="w-fit flex flex-col items-start justify-start md:gap-7 gap-4">
        <span className="w-fit flex items-center gap-2">
          <h2 className="font-semibold md:text-[17px] text-[14px] poppins">
            Follow Us
          </h2>
        </span>

        <div className="w-fit flex flex-col gap-2 md:text-[13px] text-[11px] text-[var(--gray)] ml-1">
          <p className="raleway underline underline-offset-[6px] font-light hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            Facebook
          </p>
          <p className="raleway underline underline-offset-[6px] font-light hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            Twitter
          </p>
          <p className="raleway underline underline-offset-[6px] font-light hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            Instagram
          </p>
          <p className="raleway underline underline-offset-[6px] font-light hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            YouTube
          </p>

          <p className="raleway underline underline-offset-[6px] font-light hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            Linkedin
          </p>
        </div>
      </div>

      <div className="w-fit flex flex-col items-start justify-start md:gap-7 gap-4">
        <span className="w-fit flex items-center gap-2">
          <h2 className="font-semibold md:text-[17px] text-[14px] poppins">
            Newsletter
          </h2>
        </span>

        <div className="w-fit flex flex-col gap-2 md:text-[13px] text-[11px] text-[var(--gray)] ml-1">
          <p className="raleway font-light hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            Terms of Service
          </p>
          <p className="raleway font-light hover:text-[var(--lgreen)] duration-300 cursor-pointer hover:translate-x-[2px]">
            Privacy Policy
          </p>
          {subscribe && (
            <div className="flex items-center justify-start mt-3 md:gap-2 gap-1 border-[1px] border-[var(--lgreen)] rounded-[4px]">
              <button
                className="md:w-[40px] w-[25px] md:h-[35px] h-[25px] text-[18px] rounded-[4px] bg-[var(--dgreen)] text-[var(--red)] border-[0.5px] border-[var(--red)] hover:bg-[var(--dgreen)] hover:text-[var(--lgreen)] flex items-center justify-center duration-700"
                onClick={() => {
                  setSubscribe(!subscribe);
                }}
              >
                <LiaTimesSolid />
              </button>
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="md:w-[185px] w-[145px] md:h-[35px] h-[25px] bg-transparent placeholder:text-[var(--gray)] md:text-[13px] text-[11px] font-light outline-none border-none"
              />
              <button className="md:w-[40px] w-[25px] md:h-[35px] h-[25px] md:text-[15px] text-[11px] border-[var(--lgreen)]  rounded-[4px] bg-[var(--lgreen)] text-[var(--dgreen)] border-[0.5px] hover:border-[var(--llgreen)] hover:bg-[var(--dgreen)] hover:text-[var(--llgreen)] flex items-center justify-center gap-2 duration-700">
                <FaCheck />
              </button>
            </div>
          )}

          {subscribe ? (
            <></>
          ) : (
            <button
              className="w-fit h-fit text-[11px] md:text-[13px] border-[var(--lgreen)] px-3 md:px-6 py-1 md:py-1.5 rounded-[30px] bg-[var(--lgreen)] text-[var(--dgreen)] border-[0.5px] hover:border-[var(--llgreen)] hover:bg-[var(--dgreen)] hover:text-[var(--llgreen)] duration-300 flex items-center justify-center md:gap-2 gap-1 mt-3"
              onClick={() => {
                setSubscribe(!subscribe);
              }}
            >
              Subscribe
              <LuBellRing />
            </button>
          )}
        </div>
      </div>

      <div className="absolute right-0 bottom-0 z-10 w-full flex flex-col items-end justify-end md:gap-3 gap-1.5">
        <p className="md:text-[11px] text-[10px] text-[var(--gray)] mr-2 md:text-left text-center">
          Copyright © 2024 National Youth Unemployment Benefit Scheme (NYUBS).
          All rights reserved.
        </p>

        <span className="md:w-[44%] w-[70%] h-[6px] bg-[var(--bg)] rounded-l-[30px]"></span>
      </div>
    </section>
  );
};
export default Footer;
