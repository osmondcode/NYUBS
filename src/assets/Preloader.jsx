import { useEffect, useState } from "react";
import Logo from "./IMAGES/LOGO.jpeg";

const Preloader = () => {
    const [vanish, setVanish] = useState(
      "bg-[var(--dgreen)] w-full h-screen flex flex-col items-center justify-center gap-7 text-[var(--bg)] absolute z-50 top-0 left-0 roll-up"
    );

    useEffect(() => {
        setTimeout(() => {
            setVanish(
              "bg-[var(--dgreen)] w-full h-screen hidden flex-col items-center justify-center gap-7 text-[var(--bg)] absolute z-50 top-0 left-0 roll-up"
            );
        }, 7300);
    });
  return (
    <section className={vanish}>
      <span className="flex items-center justify-start flex-col text-center lg:gap-3 gap-2">
        <img
          src={Logo}
          alt="LOGO"
          className="xl:w-[35px] w-[27px] xl:h-[35px] h-[27px] object-cover rounded-full cursor-pointer"
        />
        <h2 className="font-semibold blinkTwo text-[14px] lg:text-[16px] raleway">
          National Youth Enemployent Benefit <br /> Schene
        </h2>
      </span>

      <span className="lg:w-[400px] sm:w-[350px] w-[90%] lg:h-[6px] h-[5px] bg-[var(--gray)] rounded-[30px] absolute bottom-[8%] left-auto right-auto z-10 opacity-80 flex fade-down">
        <div className="w-0 h-full rounded-[30px] bg-[var(--lgreen)] loading"></div>
      </span>
    </section>
  );
};
export default Preloader;
