const Loader = () => {
    return (
      <section className="w-full h-screen absolute top-0 left bg-black/50 backdrop-blur-sm z-30 flex items-center justify-center gap-1">
        {/* <div className="w-[6px] h-[30px] bg-[var(--gray)] rounded-[30px] size_down"></div>
        <div className="w-[6px] h-[20px] bg-[var(--gray)] rounded-[30px] size_up"></div>
        <div className="w-[6px] h-[30px] bg-[var(--gray)] rounded-[30px] size_down"></div>
        <div className="w-[6px] h-[20px] bg-[var(--gray)] rounded-[30px] size_up"></div> */}

        <div className="loader"></div>
      </section>
    );
}
export default Loader