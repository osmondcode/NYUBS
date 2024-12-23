import Logo from "./IMAGES/LOGO.jpeg";
import { TfiAngleDown } from "react-icons/tfi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LiaAngleLeftSolid } from "react-icons/lia";
import { LiaTimesSolid } from "react-icons/lia";

const Sidebar = ({ toggleSidebar }) => {
 
  return (
    <div className="sm:hidden flex w-full items-start justify-start h-screen fixed z-40 top-0 left-0 backdrop-blur-sm text-white bg-black/20">
      <div className="2sm:w-[80%] w-full h-screen bg-[var(--dgreen)] flex flex-col items-center justify-between">
        <span className=" w-full flex 2sm:flex-row flex-col items-center justify-center mt-3 2sm:gap-2 gap-1 px-2">
          <motion.div
            className="w-fit h-fit rounded-full"
            initial={{ x: "-25px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <img
              src={Logo}
              alt="LOGO"
              className="2sm:w-[32px] w-[28px] 2sm:h-[32px] h-[28px] object-cover rounded-full"
            />
          </motion.div>

          <motion.h2
            className="font-semibold raleway text-[13px] sm:text-[15px] text-center"
            initial={{ y: "-15px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            National Youth Unemployment Benefit Scheme
          </motion.h2>
        </span>

        <div className="2sm:w-[80%] w-[95%] h-fit flex flex-wrap items-center justify-evenly 2sm:gap-y-7 gap-y-5 2sm:gap-x-6 gap-x-4 text-[var(--gray)] robotoCon 2sm:mt-1.5 mt-0 2sm:text-[13px] text-[12px]">
          <Link
            to="/"
            onClick={toggleSidebar}
            className="robotoCon flex items-center justify-center px-2 py-1 rounded-[2px] text-[var(--lgreen)] bg-white/5 border-[1.5px] border-[var(--lgreen)] hover:bg-white/10 duration-300 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Home
          </Link>
          <motion.a
            href="#"
            className="robotoCon font-medium flex items-center justify-center px-2 py-1 rounded-[2px] text-[var(--bg)] bg-white/5 border-[1.5px] border-white/50 hover:bg-white/10 duration-300 hover:text-[var(--lgreen)] hover:border-[var(--lgreen)] gap-2"
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            About
            <p className="text-[12px]">
              <TfiAngleDown />
            </p>
          </motion.a>
          <motion.a
            href="#"
            className="robotoCon font-medium flex items-center justify-center px-2 py-1 rounded-[2px] text-[var(--bg)] bg-white/5 border-[1.5px] border-white/50 hover:bg-white/10 duration-300 hover:text-[var(--lgreen)] hover:border-[var(--lgreen)] gap-2"
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Services
            <p className="text-[12px]">
              <TfiAngleDown />
            </p>
          </motion.a>
          <motion.a
            href="#"
            className="robotoCon font-medium flex items-center justify-center px-2 py-1 rounded-[2px] text-[var(--bg)] bg-white/5 border-[1.5px] border-white/50 hover:bg-white/10 duration-300 hover:text-[var(--lgreen)] hover:border-[var(--lgreen)] gap-2"
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            RSA
            <p className="text-[12px]">
              <TfiAngleDown />
            </p>
          </motion.a>
          <motion.a
            href="#"
            className="robotoCon font-medium flex items-center justify-center px-2 py-1 rounded-[2px] text-[var(--bg)] bg-white/5 border-[1.5px] border-white/50 hover:bg-white/10 duration-300 hover:text-[var(--lgreen)] hover:border-[var(--lgreen)] gap-2"
            
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            NYR
            <p className="text-[12px]">
              <TfiAngleDown />
            </p>
          </motion.a>
          <motion.a
            href="#"
            className="robotoCon font-medium flex items-center justify-center px-2 py-1 rounded-[2px] text-[var(--bg)] bg-white/5 border-[1.5px] border-white/50 hover:bg-white/10 duration-300 hover:text-[var(--lgreen)] hover:border-[var(--lgreen)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            Gallery
          </motion.a>
          <motion.a
            href="#"
            className="robotoCon font-medium flex items-center justify-center px-2 py-1 rounded-[2px] text-[var(--bg)] bg-white/5 border-[1.5px] border-white/50 hover:bg-white/10 duration-300 hover:text-[var(--lgreen)] hover:border-[var(--lgreen)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Resources
          </motion.a>
          <motion.a
            href="#"
            className="robotoCon font-medium flex items-center justify-center px-2 py-1 rounded-[2px] text-[var(--bg)] bg-white/5 border-[1.5px] border-white/50 hover:bg-white/10 duration-300 hover:text-[var(--lgreen)] hover:border-[var(--lgreen)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Partner Map
          </motion.a>
          <motion.a
            href="#"
            className="robotoCon font-medium flex items-center justify-center px-2 py-1 rounded-[2px] text-[var(--bg)] bg-white/5 border-[1.5px] border-white/50 hover:bg-white/10 duration-300 hover:text-[var(--lgreen)] hover:border-[var(--lgreen)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Dashboard
          </motion.a>
          <motion.a
            href="#"
            className="robotoCon font-medium flex items-center justify-center px-2 py-1 rounded-[2px] text-[var(--bg)] bg-white/5 border-[1.5px] border-white/50 hover:bg-white/10 duration-300 hover:text-[var(--lgreen)] hover:border-[var(--lgreen)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            Blog
          </motion.a>
          <motion.a
            href="#"
            className="robotoCon font-medium flex items-center justify-center px-2 py-1 rounded-[2px] text-[var(--bg)] bg-white/5 border-[1.5px] border-white/50 hover:bg-white/10 duration-300 hover:text-[var(--lgreen)] hover:border-[var(--lgreen)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            News
          </motion.a>
          <motion.a
            href="#"
            className="robotoCon font-medium flex items-center justify-center px-2 py-1 rounded-[2px] text-[var(--bg)] bg-white/5 border-[1.5px] border-white/50 hover:bg-white/10 duration-300 hover:text-[var(--lgreen)] hover:border-[var(--lgreen)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            Contact
          </motion.a>
        </div>

        <span className="flex 2sm:w-[90%] w-[95%] h-fit flex-col items-center justify-center gap-3 2sm:mb-3 mb-2">
          <motion.button
            className="2sm:w-[70%] w-[85%] flex items-center justify-center gap-2 border-[1px] border-[var(--bg)] rounded-[4px] text-[var(--bg)] xl:px-2.5 px-1.5 py-1 text-[12px] bg-[var(--dgreen)] duration-300 raleway hover:bg-white/10 hover:text-[var(--lgreen)] font-semibold"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            DONATE
          </motion.button>

          <motion.button
            className="2sm:w-[70%] w-[85%] flex items-center justify-center gap-2 border-[1px] border-[var(--bg)] rounded-[4px] text-[var(--bg)] xl:px-2.5 px-1.5 py-1 text-[12px] bg-[var(--dgreen)] duration-300 raleway hover:bg-white/10 hover:text-[var(--lgreen)] font-semibold"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            VOLUNTEER
          </motion.button>

          <Link
            className="2sm:w-[70%] w-[85%] flex items-center justify-center gap-2 border-[1px] border-[var(--bg)] rounded-[4px] text-[var(--bg)] xl:px-2.5 px-1.5 py-1 text-[12px] bg-[var(--dgreen)] duration-300 raleway hover:bg-white/10 hover:text-[var(--lgreen)] font-semibold"
            to="/form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onClick={toggleSidebar}
          >
            REGISTER
          </Link>

          <motion.button
            className="2sm:w-[70%] w-[85%] flex items-center justify-center gap-2 border-[1px] border-[var(--lgreen)] rounded-[4px] text-[var(--bg)] xl:px-2.5 px-1.5 xl:py-1.5 py-1 2sm:text-[13px] text-[12px] bg-[var(--lgreen)] duration-300 raleway hover:bg-[var(--dgreen)]  font-semibold"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            LOGIN
          </motion.button>
        </span>
      </div>
      <button
        className="w-fit h-fit flex items-center justify-center 2sm:p-2 p-1 bg-[var(--dgreen)] absolute 2sm:right-[14%] right-4 2sm:top-4 top-3 2sm:border-none border border-white/30 rounded"
        onClick={toggleSidebar}
      >
        <motion.p
          initial={{ x: "20px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="hidden 2sm:flex"
        >
          <LiaAngleLeftSolid />
        </motion.p>

        <motion.p
          initial={{ x: "20px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="2sm:hidden flex"
        >
          <LiaTimesSolid />
        </motion.p>
      </button>
    </div>
  );
};
export default Sidebar;
