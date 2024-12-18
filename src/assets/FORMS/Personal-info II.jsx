import React, { useState, useRef } from "react";
import { TiUser } from "react-icons/ti";
import { ImCloudUpload } from "react-icons/im";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import UnemployedForm from "./Unemployed";
import Under_employed from "./Under-employed";
import SelfemployedSForm from "./Self-employed";

const Personal_info = ({ handlePagePrev }) => {
  const [fN, setFN] = useState(false);
  const handleLabelFN = () => {
    setFN(!fN);
  };

  const ref = useRef(null);

  const inView = useInView(ref, { twice: true });
  const [textArea, setTextArea] = useState(false);


   const canvasRef = useRef(null);
   const [isDrawing, setIsDrawing] = useState(false);

   // Start drawing
   const startDrawing = (e) => {
     const canvas = canvasRef.current;
     const context = canvas.getContext("2d");

     setIsDrawing(true);
     const rect = canvas.getBoundingClientRect();
     context.beginPath();
     context.moveTo(e.clientX - rect.left, e.clientY - rect.top);
   };

   // Stop drawing
   const stopDrawing = () => {
     setIsDrawing(false);
   };

   // Draw on canvas
   const draw = (e) => {
     if (!isDrawing) return;

     const canvas = canvasRef.current;
     const context = canvas.getContext("2d");
     const rect = canvas.getBoundingClientRect();

     context.lineWidth = 2;
     context.lineCap = "round";
     context.strokeStyle = "black";

     context.lineTo(e.clientX - rect.left, e.clientY - rect.top);
     context.stroke();
   };
   const [savedSign, setSavedSign] = useState(false);

   // Clear canvas
   const clearCanvas = () => {
     const canvas = canvasRef.current;
     const context = canvas.getContext("2d");
     context.clearRect(0, 0, canvas.width, canvas.height);
     setSavedSign(false);

   };

   // Save signature as data URL
   const saveSignature = () => {
     const canvas = canvasRef.current;
     const dataURL = canvas.toDataURL("image/png");
     console.log("Signature saved as:", dataURL);
     setSavedSign(true);
   };

  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-start sm:px-[30px] px-[15px] md:px-[5%] xl:px-[8%] py-5 mb-10">
      {/* EMPLOYMENT SECTION */}

      <div className="w-full items-center justify-center flex flex-col gap-5">
        <hr className="w-[85%] h-[1px] border-[-0.5px] border-[var(--border)]" />
        <motion.span
          className="w-fit h-fit lg:px-3 px-2 py-1 lg:text-[14px] text-[12px] montserrat bg-[var(--dgreen)] lg:rounded-md rounded text-[var(--bg)] font-medium translate-y-[-35px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          ref={ref}
        >
          <p>Program Interests</p>
        </motion.span>

        {/* CURRENT STATS */}
        <div className="w-full h-fit flex flex-col items-start justify-start gap-3 mt-8">
          <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
            Which of the following support program are you interested in ?
          </p>

          <span className="flex flex-col gap-3">
            <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
              <input type="checkbox" />

              <p className="text-[15px] text-[var(--dark)]">
                Vocational training
              </p>
            </div>
            <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
              <input type="checkbox" />

              <p className="text-[15px] text-[var(--dark)]">Business grant</p>
            </div>
            <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
              <input type="checkbox" />

              <p className="text-[15px] text-[var(--dark)]">Apprenticeships</p>
            </div>
            <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
              <input type="checkbox" />

              <p className="text-[15px] text-[var(--dark)]">Mentorship</p>
            </div>
            <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
              <input type="checkbox" />

              <p className="text-[15px] text-[var(--dark)]">
                Employment placement services
              </p>
            </div>
          </span>
        </div>

        <div className="w-full h-fit flex flex-col items-start justify-start gap-3 mt-12">
          <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
            Are you interested in joining a government-supported intenship
            program ?
          </p>

          <span className="flex flex-col gap-3">
            <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
              <input type="radio" />
              <p className="text-[15px] text-[var(--dark)]">Yes</p>
            </div>
            <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
              <input type="radio" />
              <p className="text-[15px] text-[var(--dark)]">No</p>
            </div>
          </span>
        </div>
      </div>

      <div className="w-full items-center justify-center flex flex-col gap-5 mt-[100px]">
        <hr className="w-[85%] h-[1px] border-[-0.5px] border-[var(--border)]" />
        <span className="w-fit h-fit lg:px-3 px-2 py-1 lg:text-[14px] text-[12px] montserrat bg-[var(--dgreen)] lg:rounded-md rounded text-[var(--bg)] font-medium translate-y-[-35px]">
          <p>Personal Development Interests</p>
        </span>

        <div className="w-full h-fit flex flex-col items-start justify-start gap-3 mt-8">
          <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
            Are you interested in receiving mentorship ?
          </p>

          <span className="flex flex-col gap-3">
            <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
              <input type="radio" />
              <p className="text-[15px] text-[var(--dark)]">Yes</p>
            </div>
            <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
              <input type="radio" />
              <p className="text-[15px] text-[var(--dark)]">No</p>
            </div>
          </span>
        </div>

        <div className="w-full h-fit flex flex-col items-start justify-start gap-3 mt-12">
          <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
            Are you interested in joining a business incubator program ?
          </p>

          <span className="flex flex-col gap-3">
            <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
              <input type="radio" />
              <p className="text-[15px] text-[var(--dark)]">Yes</p>
            </div>
            <div className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200">
              <input type="radio" />
              <p className="text-[15px] text-[var(--dark)]">No</p>
            </div>
          </span>
        </div>

        <div className="w-full h-fit flex flex-col items-start justify-start gap-3 mt-12">
          <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
            Do you have any entrepreneurial ideas you would like to pursue ?
          </p>

          <span className="flex flex-col gap-3">
            <div
              className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200"
              onClick={() => {
                textArea === false ? setTextArea(true) : setTextArea(true);
              }}
            >
              <div className="w-[16px] h-[16px] border-[2.5px] border-[var(--dgreen)] rounded-full flex items-center justify-center">
                <span
                  className={
                    textArea === true
                      ? "w-[8px] h-[8px] rounded-full bg-[var(--lgreen)] flex items-center justify-center"
                      : "w-[8px] h-[8px] rounded-full bg-[var(--lgreen)] hidden items-center justify-center"
                  }
                ></span>
              </div>
              <p className="text-[15px] text-[var(--dark)]">Yes</p>
            </div>
            <div
              className="flex items-center justify-start gap-3 cursor-pointer hover:font-semibold duration-200"
              onClick={() => {
                textArea === true ? setTextArea(false) : setTextArea(false);
              }}
            >
              <div className="w-[16px] h-[16px] border-[2.5px] border-[var(--dgreen)] rounded-full flex items-center justify-center">
                <span
                  className={
                    textArea === false
                      ? "w-[8px] h-[8px] rounded-full bg-[var(--lgreen)] flex items-center justify-center"
                      : "w-[8px] h-[8px] rounded-full bg-[var(--lgreen)] hidden items-center justify-center"
                  }
                ></span>
              </div>
              <p className="text-[15px] text-[var(--dark)]">No</p>
            </div>
          </span>
        </div>

        {textArea && (
          <div className="w-full h-fit flex flex-col items-start justify-start gap-3 mt-5">
            <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
              Please provide details.
            </p>

            <textarea className="sm:w-[350px] w-full h-[320px] resize-none text-[14px] p-2 rounded outline-none border-[1px] border-[var(--border)] bg-[var(--light)]" />
          </div>
        )}
      </div>

      <div className="w-full items-center justify-center flex flex-col gap-5 mt-[100px]">
        <hr className="w-[85%] h-[1px] border-[-0.5px] border-[var(--border)]" />
        <span className="w-fit h-fit lg:px-3 px-2 py-1 lg:text-[14px] text-[12px] montserrat bg-[var(--dgreen)] lg:rounded-md rounded text-[var(--bg)] font-medium translate-y-[-35px]">
          <p>Consent and declaration</p>
        </span>

        <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-8">
          <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
            Consent to Terms & Conditions
          </p>

          <div className="flex flex-col gap-2">
            <p>
              I consent to the terms and conditions of the NYUBS and confirm
              that all information provided is accurate to the best of my
              knowledge
            </p>
            <span className="flex gap-7">
              <div className="flex items-center justify-start gap-2.5 cursor-pointer hover:font-semibold duration-200">
                <input type="checkbox" className="scale-[1.3]" />
                <p className="text-[15px] text-[var(--dark)]">Yes</p>
              </div>
              <div className="flex items-center justify-start gap-2.5 cursor-pointer hover:font-semibold duration-200">
                <input type="checkbox" className="scale-[1.3]" />

                <p className="text-[15px] text-[var(--dark)]">No</p>
              </div>
            </span>
          </div>
        </div>

        <div className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-8">
          <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[15px] text-[14px]">
            Signature
          </p>

          <p>
            Please sign to confirm your details and consent to participate in
            the NYUBS program.
          </p>

          <canvas
            ref={canvasRef}
            className="md:w-[400px] w-[300px] h-[200px] border-[1px] border-[var(--border)] cursor-crosshair bg-[var(--light)]"
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseMove={draw}
          />
          <div className="mt-5 flex items-center gap-8">
            <button
              onClick={clearCanvas}
              className="w-fit h-fit px-4 py-2 text-[14px] bg-[var(--red)] rounded text-[var(--bg)] font-semibold hover:opacity-70 duration-300"
            >
              Clear
            </button>
            <button
              onClick={saveSignature}
              className="w-fit h-fit px-4 py-2 text-[14px] bg-[var(--lgreen)] rounded text-[var(--bg)] font-semibold hover:opacity-70 duration-300"
            >
              Save
            </button>
          </div>
          {}
          <p
            className={
              savedSign === true
                ? "text-[13px] italic text-[var(--lgreen)] flex"
                : "text-[13px] italic text-[var(--lgreen)] hidden"
            }
          >
            Your signature has been saved and will be submitted
          </p>
        </div>
      </div>

      <span className="w-full h-fit flex flex-col items-start justify-start gap-4 mt-8">
        <p className="text-[var(--dgreen)] sm:mx-4 mx-0 raleway font-semibold lg:text-[14px] text-[13px]">
          Date of Registration
        </p>

        <form className="flex items-start justify-start flex-col w-fit h-fit relative text-[#333] gap-3">
          <p className="text-[12px]">
            Enter today's date.
          </p>
          <input
            type="date"
            className="text-[14px] px-4 py-2 rounded w-[200px] outline-none border-[1px] border-[var(--border)] bg-[var(--light)]"
          />
        </form>
      </span>

      <div className="w-full flex items-end justify-between mt-[100px]">
        <button
          className="w-fit flex items-center justify-center gap-2 px-5 py-1.5 text-[16px] rounded bg-[#6C757D] text-[var(--bg)] font-semibold"
          onClick={handlePagePrev}
        >
          Prev
        </button>

        <button className="w-fit flex items-center justify-center gap-2 px-5 py-1.5 text-[16px] rounded bg-[var(--dgreen)] text-[var(--bg)] font-semibold">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Personal_info;
