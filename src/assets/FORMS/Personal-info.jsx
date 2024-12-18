import React, { useState, useRef } from "react";
import { TiUser } from "react-icons/ti";
import { ImCloudUpload } from "react-icons/im";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import UnemployedForm from "./Unemployed";
import Under_employed from "./Under-employed";
import SelfemployedSForm from "./Self-employed";



const Personal_info = ({ handlePageNext }) => {
  const [fN, setFN] = useState(false);
  const handleLabelFN = () => {
    setFN(!fN);
  };

  const ref = useRef(null);

  const inView = useInView(ref, { twice: true });


  const [formSec, setFormSec] = useState(null)
  const [Unemployed, setUnemployed] = useState(<UnemployedForm/>)
  const [UnderEmployed, setUnderEmployed] = useState(<Under_employed/>)
  const [SelfEmployed, setSelfEmployed] = useState(<SelfemployedSForm />);
  const [SelfEmployedD, setSelfEmployedD] = useState(<SelfemployedSForm />);



  const handleUnemployed = () => {
    setFormSec(Unemployed)
  }
  const handleUnderEmployed = () => {
    setFormSec(UnderEmployed)
  }
    const handleSelfEmployed = () => {
      setFormSec(SelfEmployed);
    };
        const handleSelfEmployedD = () => {
          setFormSec(SelfEmployedD);
        };


  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-start sm:px-[30px] px-[15px] md:px-[5%] xl:px-[8%] py-5 mb-10">
      <motion.span
        className="w-fit h-fit lg:px-3 px-2 py-1 lg:text-[14px] text-[12px] montserrat bg-[var(--dgreen)] lg:rounded-md rounded text-[var(--bg)] font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        ref={ref}
      >
        <p>Personal information</p>
      </motion.span>

      <span className="w-full mt-8 flex flex-col gap-3">
        <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[14px] text-[13px]">
          Upload Passport Photo
        </p>

        <div className="w-full flex flex-col lg:gap-3 gap-2 items-center justify-center mt-5">
          <motion.span
            className="lg:w-[100px] w-[90px] lg:h-[100px] h-[90px] bg-black/30 rounded-md flex items-center justify-center lg:text-[80px] text-[70px] lg:hover:text-[70px] hover:text-[60px] cursor-pointer hover:opacity-90 duration-200 pt-2 text-[#333]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            ref={ref}
          >
            <TiUser />
          </motion.span>

          <motion.p
            className="text-[#555] lg:text-[13px] text-[12px] raleway italic"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            ref={ref}
          >
            Upload a recent passport-sized photo (JPEG, JPG)
          </motion.p>

          <motion.button
            className="px-4 py-1 rounded text-[var(--bg)] lg:text-[15.5px] text-[13px] mt-1 bg-[var(--dgreen)] hover:opacity-80 duration-200"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            ref={ref}
          >
            Upload
          </motion.button>
        </div>

        <div className="w-full flex flex-col gap-2 mt-12">
          <motion.p
            className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[14px] text-[13px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            ref={ref}
          >
            Full Name
          </motion.p>

          {/* NAMES OF USER */}
          <div className="w-full flex items-center justify-between lg:justify-start flex-wrap lg:gap-x-[40px] gap-x-[30px] gap-y-10 mt-8">
            <motion.form
              className="flex items-start justify-start flex-col sm:w-fit w-full h-fit relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              ref={ref}
            >
              <label
                for="firstname"
                className={
                  fN
                    ? "w-fit h-fit absolute top-[-10px] px-1.5 py-0 bg-[var(--bg)] left-2.5 z-10 text-[14px] text-[#333] duration-500"
                    : "w-fit h-fit absolute top-0 translate-y-[9px] px-1.5 py-0 bg-[var(--light)] left-2.5 z-10 text-[14px] text-[#666] duration-500"
                }
              >
                First Name
              </label>
              <input
                type="text"
                className="text-[14px] px-4 py-2 rounded sm:w-[280px] w-full outline-none border-[1px] border-[var(--border)] bg-[var(--light)]"
                onMouseLeave={() => {
                  fN === true ? setFN(false) : setFN(true);
                }}
              />
            </motion.form>

            <motion.form
              className="flex items-start justify-start flex-col sm:w-fit w-full h-fit relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              ref={ref}
            >
              <label
                for="Lastname"
                className={
                  fN
                    ? "w-fit h-fit absolute top-[-10px] px-1.5 py-0 bg-[var(--bg)] left-2.5 z-10 text-[14px] text-[#333] duration-500"
                    : "w-fit h-fit absolute top-0 translate-y-[9px] px-1.5 py-0 bg-[var(--light)] left-2.5 z-10 text-[14px] text-[#666] duration-500"
                }
              >
                Last Name
              </label>
              <input
                type="text"
                className="text-[14px] px-4 py-2 rounded sm:w-[280px] w-full outline-none border-[1px] border-[var(--border)] bg-[var(--light)]"
                onMouseLeave={() => {
                  fN === true ? setFN(false) : setFN(true);
                }}
              />
            </motion.form>

            <motion.form
              className="flex items-start justify-start flex-col sm:w-fit w-full h-fit relative"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              ref={ref}
            >
              <label
                for="othernames"
                className={
                  fN
                    ? "w-fit h-fit absolute top-[-10px] px-1.5 py-0 bg-[var(--bg)] left-2.5 z-10 text-[14px] text-[#333] duration-500"
                    : "w-fit h-fit absolute top-0 translate-y-[9px] px-1.5 py-0 bg-[var(--light)] left-2.5 z-10 text-[14px] text-[#666] duration-500"
                }
              >
                Other Names
              </label>
              <input
                type="text"
                className="text-[14px] px-4 py-2 rounded sm:w-[280px] w-full outline-none border-[1px] border-[var(--border)] bg-[var(--light)]"
                onMouseLeave={() => {
                  fN === true ? setFN(false) : setFN(true);
                }}
              />
            </motion.form>
          </div>
          {/* NAMES OF USER */}

          {/* GENDER OF USER */}

          <div className="w-full flex flex-col gap-2 mt-12">
            <motion.p
              className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[14px] text-[13px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              ref={ref}
            >
              Gender
            </motion.p>
            <form className="flex gap-7">
              <motion.div
                className="flex gap-2 items-center justify-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                ref={ref}
              >
                <input type="radio" className="bg-black" />
                <label for="male" className="text-[13.8px]">
                  Male
                </label>
              </motion.div>

              <motion.div
                className="flex gap-2 items-center justify-start"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                ref={ref}
              >
                <input type="radio" />
                <label for="female" className="text-[13.8px]">
                  Female
                </label>
              </motion.div>
            </form>
          </div>

          {/* GENDER OF USER */}

          {/* OTHER INFO OF USER */}

          <div className="w-full flex items-center justify-between lg:justify-start flex-wrap lg:gap-x-[100px] gap-x-[70px] gap-y-10 mt-12">
            <span className="flex flex-col gap-4">
              <motion.p
                className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[14px] text-[13px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                ref={ref}
              >
                Age
              </motion.p>
              <motion.form
                className="flex items-start justify-start flex-col w-fit h-fit relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                ref={ref}
              >
                <label
                  for="age"
                  className={
                    fN
                      ? "w-fit h-fit absolute top-[-10px] px-1.5 py-0 bg-[var(--bg)] left-2.5 z-10 text-[14px] text-[#333] duration-500"
                      : "w-fit h-fit absolute top-0 translate-y-[9px] px-1.5 py-0 bg-[var(--light)] left-2.5 z-10 text-[14px] text-[#666] duration-500"
                  }
                >
                  Enter Age
                </label>
                <input
                  type="number"
                  className="text-[14px] px-4 py-2 rounded sm:w-[150px] w-[250px] outline-none border-[1px] border-[var(--border)]] bg-[var(--light)]"
                  onMouseLeave={() => {
                    fN === true ? setFN(false) : setFN(true);
                  }}
                />
              </motion.form>
            </span>

            <span className="flex flex-col gap-4">
              <motion.p
                className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[14px] text-[13px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                ref={ref}
              >
                Date of Birth
              </motion.p>
              <motion.form
                className="flex items-start justify-start flex-col w-fit h-fit relative text-[#333]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                ref={ref}
              >
                <input
                  type="date"
                  className="text-[14px] px-4 py-2 rounded w-[200px] outline-none border-[1px] border-[var(--border)] bg-[var(--light)]"
                  onMouseLeave={() => {
                    fN === true ? setFN(false) : setFN(true);
                  }}
                />
              </motion.form>
            </span>

            <span className="flex flex-col gap-4">
              <motion.p
                className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[14px] text-[13px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                ref={ref}
              >
                National Identification Number (NIN)
              </motion.p>
              <motion.form
                className="flex items-start justify-start flex-col w-fit h-fit relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                ref={ref}
              >
                <label
                  for="NIN"
                  className={
                    fN
                      ? "w-fit h-fit absolute top-[-10px] px-1.5 py-0 bg-[var(--bg)] left-2.5 z-10 text-[14px] text-[#333] duration-500"
                      : "w-fit h-fit absolute top-0 translate-y-[9px] px-1.5 py-0 bg-[var(--light)] left-2.5 z-10 text-[14px] text-[#666] duration-500"
                  }
                >
                  Enter your NIN
                </label>
                <input
                  type="text"
                  className="text-[14px] px-4 py-2 rounded w-[280px] outline-none border-[1px] border-[var(--border)] bg-[var(--light)]"
                  onMouseLeave={() => {
                    fN === true ? setFN(false) : setFN(true);
                  }}
                />
              </motion.form>
            </span>

            <span className="flex flex-col gap-4">
              <motion.p
                className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[14px] text-[13px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                ref={ref}
              >
                State OF Residence
              </motion.p>
              <motion.form
                className="flex items-start justify-start flex-col sm:w-[200px] w-[250px] h-[38px] text-[14px] px-4  border-[1px] border-[var(--border] bg-[var(--light)] rounded relative text-[#666]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                ref={ref}
              >
                <select className="w-full h-full flex items-center justify-between bg-transparent">
                  <option value="select state">Select State</option>
                  <option value="Abia">Abia</option>
                  <option value="Adamawa">Adamawa</option>
                  <option value="Akwa Ibom">Akwa Ibom</option>
                  <option value=""></option>
                </select>
              </motion.form>
            </span>
          </div>
          {/* OTHER INFO OF USER */}

          {/* RESIDENCE OF USER */}
          <div className="w-full flex items-center justify-between lg:justify-start flex-wrap lg:gap-x-[100px] gap-x-[70px] gap-y-10 mt-12">
            <span className="flex flex-col gap-4">
              <motion.p
                className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[14px] text-[13px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                ref={ref}
              >
                State OF Origin
              </motion.p>
              <motion.form
                className="flex items-start justify-start flex-col sm:w-[170px] w-[250px] h-[38px] text-[14px] px-4  border-[1px] border-[var(--border)] rounded relative bg-[var(--light)] text-[#666]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                ref={ref}
              >
                <select className="w-full h-full flex items-center justify-between bg-[var(--light)]">
                  <option value="select state">Select State</option>
                  <option value="Abia">Abia</option>
                  <option value="Adamawa">Adamawa</option>
                  <option value="Akwa Ibom">Akwa Ibom</option>
                  <option value=""></option>
                </select>
              </motion.form>
            </span>

            <span className="flex flex-col gap-4 sm:w-fit w-full">
              <motion.p
                className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[14px] text-[13px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                ref={ref}
              >
                Home Address
              </motion.p>
              <motion.form
                className="flex items-start justify-start flex-col sm:w-fit w-full h-fit relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                ref={ref}
              >
                <label
                  for="Home address"
                  className={
                    fN
                      ? "w-fit h-fit absolute top-[-10px] px-1.5 py-0 bg-[var(--bg)] left-2.5 z-10 text-[14px] text-[#333] duration-500"
                      : "w-fit h-fit absolute top-0 translate-y-[9px] px-1.5 py-0 bg-[var(--light)] left-2.5 z-10 text-[14px] text-[#666] duration-500 "
                  }
                >
                  Enter residential address
                </label>
                <input
                  type="text"
                  className="text-[14px] px-4 py-2 rounded sm:w-[280px] w-full outline-none border-[1px] border-[var(--border)] bg-[var(--light)]"
                  onMouseLeave={() => {
                    fN === true ? setFN(false) : setFN(true);
                  }}
                />
              </motion.form>
            </span>

            <span className="flex flex-col gap-4 sm:w-fit w-full">
              <motion.p
                className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[14px] text-[13px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                ref={ref}
              >
                City / Town of Residence
              </motion.p>
              <motion.form
                className="flex items-start justify-start flex-col sm:w-fit w-full h-fit relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                ref={ref}
              >
                <label
                  for="town or residence"
                  className={
                    fN
                      ? "w-fit h-fit absolute top-[-10px] px-1.5 py-0 bg-[var(--bg)] left-2.5 z-10 text-[14px] text-[#333] duration-500"
                      : "w-fit h-fit absolute top-0 translate-y-[9px] px-1.5 py-0 bg-[var(--light)] left-2.5 z-10 text-[14px] text-[#666] duration-500 "
                  }
                >
                  Enter city of residence
                </label>
                <input
                  type="text"
                  className="text-[14px] px-4 py-2 rounded sm:w-[280px] w-full outline-none border-[1px] border-[var(--border)] bg-[var(--light)]"
                  onMouseLeave={() => {
                    fN === true ? setFN(false) : setFN(true);
                  }}
                />
              </motion.form>
            </span>
          </div>
          {/* RESIDENCE OF USER */}

          {/* CONTACT OF USER */}
          <div className="w-full flex items-center justify-between lg:justify-start flex-wrap lg:gap-x-[80px] gap-x-[50px] gap-y-10 mt-12">
            <span className="flex flex-col gap-4 opacity-50">
              <motion.p
                className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[14px] text-[13px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                ref={ref}
              >
                Local Government Area (LGA)
              </motion.p>
              <motion.form
                className="flex items-start justify-start flex-col sm:w-[220px] w-[270px] h-[38px] text-[14px] px-4  border-[1px] border-[var(--border)] rounded relative bg-[var(--light)] "
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                ref={ref}
              >
                <select className="w-full h-full flex items-center justify-between bg-[var(--light)]">
                  <option value="select state">Select LGA</option>
                </select>
              </motion.form>
            </span>

            <span className="flex flex-col gap-4 sm:w-fit w-full">
              <motion.p
                className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[14px] text-[13px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                ref={ref}
              >
                Phone Number
              </motion.p>
              <motion.form
                className="flex items-start justify-start flex-col sm:w-fit w-full h-fit relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                ref={ref}
              >
                <label
                  for="town or residence"
                  className={
                    fN
                      ? "w-fit h-fit absolute top-[-10px] px-1.5 py-0 bg-[var(--bg)] left-2.5 z-10 text-[14px] text-[#333] duration-500"
                      : "w-fit h-fit absolute top-0 translate-y-[9px] px-1.5 py-0 bg-[var(--light)] left-2.5 z-10 text-[14px] text-[#666] duration-500 "
                  }
                >
                  Enter mobile number
                </label>
                <input
                  type="text"
                  className="text-[14px] px-4 py-2 rounded sm:w-[240px] w-full outline-none border-[1px] border-[var(--border)] bg-[var(--light)]"
                  onMouseLeave={() => {
                    fN === true ? setFN(false) : setFN(true);
                  }}
                />
              </motion.form>
            </span>

            <span className="flex flex-col gap-4 sm:w-fit w-full">
              <motion.p
                className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[14px] text-[13px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                ref={ref}
              >
                Email Address
              </motion.p>
              <motion.form
                className="flex items-start justify-start flex-col sm:w-fit w-full h-fit relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                ref={ref}
              >
                <label
                  for="town or residence"
                  className={
                    fN
                      ? "w-fit h-fit absolute top-[-10px] px-1.5 py-0 bg-[var(--bg)] left-2.5 z-10 text-[14px] text-[#333] duration-500"
                      : "w-fit h-fit absolute top-0 translate-y-[9px] px-1.5 py-0 bg-[var(--light)] left-2.5 z-10 text-[14px] text-[#666] duration-500 "
                  }
                >
                  Enter email address
                </label>
                <input
                  type="text"
                  className="text-[14px] px-4 py-2 rounded sm:w-[240px] w-full outline-none border-[1px] border-[var(--border)] bg-[var(--light)]"
                  onMouseLeave={() => {
                    fN === true ? setFN(false) : setFN(true);
                  }}
                />
              </motion.form>
            </span>

            <span className="flex flex-col gap-4 sm:w-fit w-full">
              <motion.p
                className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[14px] text-[13px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                ref={ref}
              >
                Upload CV
              </motion.p>
              <motion.form
                className="flex items-start justify-start flex-col sm:w-fit w-full h-fit relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                ref={ref}
              >
                <label
                  for="upload CV"
                  className={
                    fN
                      ? "w-fit h-fit absolute top-[-10px] px-1.5 py-0 bg-[var(--bg)] left-2.5 z-10 text-[14px] text-[#333] duration-500"
                      : "w-fit h-fit absolute top-0 translate-y-[9px] px-1.5 py-0 bg-[var(--light)] left-2.5 z-10 text-[14px] text-[#666] duration-500 "
                  }
                ></label>

                <div className="flex items-center gap-2 sm:w-fit w-full">
                  <input
                    placeholder="Upload in word format or PDF"
                    type="text"
                    readOnly
                    className="sm:text-[14px] text-[12.5px] sm:px-4 px-2 py-2 rounded sm:w-[250px] w-[200px] outline-none border-[1px] border-[var(--border)] bg-[var(--light)] text-[#666]"
                    onMouseLeave={() => {
                      fN === true ? setFN(false) : setFN(true);
                    }}
                  />

                  <button className="w-fit flex items-center justify-center gap-2 sm:px-4 px-2 py-2 text-[12.5px] sm:text-[14px] rounded bg-[var(--dgreen)] text-[var(--bg)] font-semibold">
                    Upload
                    <ImCloudUpload />
                  </button>
                </div>
              </motion.form>
            </span>
          </div>

          {/* CONTACT OF USER */}

          <hr className="w-[80%] h-[1.5px] bg-[var(--border)] flex self-center justify-self-center mt-[70px]" />

          {/* EMPLOYMENT SECTION */}

          <div className="w-full items-center justify-center flex flex-col mt-[50px] gap-5">
            <span className="w-fit h-fit lg:px-3 px-2 py-1 lg:text-[14px] text-[12px] montserrat bg-[var(--dgreen)] lg:rounded-md rounded text-[var(--bg)] font-medium">
              <p>Employment Status</p>
            </span>

            {/* CURRENT STATS */}
            <div className="w-full h-fit flex flex-col items-start justify-start gap-3 mt-12">
              <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
                Current Employment Status
              </p>

              <span className="flex flex-col gap-3">
                <div
                  className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200"
                  onClick={handleUnemployed}
                >
                  <div className="w-[18px] h-[18px] border-[2.5px] border-[var(--dgreen)] rounded-full flex items-center justify-center">
                    <span
                      className={
                        formSec === Unemployed
                          ? "w-[8px] h-[8px] rounded-full bg-[var(--lgreen)] flex items-center justify-center"
                          : "w-[8px] h-[8px] rounded-full bg-[var(--lgreen)] hidden items-center justify-center"
                      }
                    ></span>
                  </div>

                  <p className="text-[15px] text-[var(--dark)]">Unemployed</p>
                </div>
                <div
                  className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200"
                  onClick={handleUnderEmployed}
                >
                  <div className="w-[18px] h-[18px] border-[2.5px] border-[var(--dgreen)] rounded-full flex items-center justify-center">
                    <span
                      className={
                        formSec === UnderEmployed
                          ? "w-[8px] h-[8px] rounded-full bg-[var(--lgreen)] flex items-center justify-center"
                          : "w-[8px] h-[8px] rounded-full bg-[var(--lgreen)] hidden items-center justify-center"
                      }
                    ></span>
                  </div>
                  <p className="text-[15px] text-[var(--dark)]">
                    Under-employed
                  </p>
                </div>
                <div
                  className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200"
                  onClick={handleSelfEmployed}
                >
                  <div className="w-[18px] h-[18px] border-[2.5px] border-[var(--dgreen)] rounded-full flex items-center justify-center">
                    <span
                      className={
                        formSec === SelfEmployed
                          ? "w-[8px] h-[8px] rounded-full bg-[var(--lgreen)] flex items-center justify-center"
                          : "w-[8px] h-[8px] rounded-full bg-[var(--lgreen)] hidden items-center justify-center"
                      }
                    ></span>
                  </div>
                  <p className="text-[15px] text-[var(--dark)]">
                    Self-employed (But struggling)
                  </p>
                </div>

                <div
                  className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200"
                  onClick={handleSelfEmployedD}
                >
                  <div className="w-[18px] h-[18px] border-[2.5px] border-[var(--dgreen)] rounded-full flex items-center justify-center">
                    <span
                      className={
                        formSec === SelfEmployedD
                          ? "w-[8px] h-[8px] rounded-full bg-[var(--lgreen)] flex items-center justify-center"
                          : "w-[8px] h-[8px] rounded-full bg-[var(--lgreen)] hidden items-center justify-center"
                      }
                    ></span>
                  </div>
                  <p className="text-[15px] text-[var(--dark)]">
                    Self-employed (Doing well)
                  </p>
                </div>
              </span>
            </div>
            {/* CURRENT STATS */}

            {/* EMPLOYMENT SECTION FORM */}
            <div className="w-full h-fit flex items-start justify-center mt-10">
              {formSec}
            </div>
            {/* EMPLOYMENT SECTION FORM */}
          </div>
          {/* EMPLOYMENT SECTION */}

          <div className="w-full flex items-end justify-end mt-[100px]">
            <button
              className="w-fit flex items-center justify-center gap-2 px-5 py-1.5 text-[16px] rounded bg-[#6C757D] text-[var(--bg)] font-semibold"
              onClick={handlePageNext}
            >
              Next
            </button>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Personal_info;
