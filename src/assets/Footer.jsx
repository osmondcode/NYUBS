import Logo from "./IMAGES/LOGO.jpeg";

const Footer = () => {
  return (
    <section className="w-full min-h-[50vh] bg-[var(--dgreen)] text-[var(--bg)] px-[8%] pt-[30px] flex items-start justify-around">
      <div className="w-fit flex flex-col items-start justify-start gap-2">
        <span className="w-fit flex items-center gap-2">
          <div className="w-[25px] h-[25px] rounded-full">
            <img
              src={Logo}
              alt="LOGO"
              className="w-full h-full rounded-full flex items-center justify-center object-cover"
            />
          </div>
          <h2 className="font-semibold text-[14px] poppins">NYUBS</h2>
        </span>
      </div>

      <div className="w-fit flex flex-col items-start justify-start gap-2">
        <span className="w-fit flex items-center gap-2">
          <h2 className="font-semibold text-[14px] poppins">Other Links</h2>
        </span>
      </div>

      <div className="w-fit flex flex-col items-start justify-start gap-2">
        <span className="w-fit flex items-center gap-2">
          <h2 className="font-semibold text-[14px] poppins">Follow Us</h2>
        </span>
      </div>

      <div className="w-fit flex flex-col items-start justify-start gap-2">
        <span className="w-fit flex items-center gap-2">
          <h2 className="font-semibold text-[14px] poppins">Newsletter</h2>
        </span>
      </div>
    </section>
  );
};
export default Footer;
