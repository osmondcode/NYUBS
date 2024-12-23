const About_Dropdown = () => {
  return (
    <div className="w-[180px] h-fit flex flex-col items-start justify-start bg-[var(--dark)] opacity-90 absolute z-20 right-[-150px] bottom-[-150px] text-[12px] capitalize rounded-md">
      <p className="w-full border-b-[0.5px] border-[var(--gray)] p-1.5 flex items-start justify-start roboto hover:text-[var(--lgreen)] hover:underline underline-offset-4">
        Our mission
      </p>
      <p className="w-full border-b-[0.5px] border-[var(--gray)] p-1.5 flex items-start justify-start roboto hover:text-[var(--lgreen)] hover:underline underline-offset-4">
        history
      </p>
      <p className="w-full border-b-[0.5px] border-[var(--gray)] p-1.5 flex items-start justify-start roboto hover:text-[var(--lgreen)] hover:underline underline-offset-4">
        lead implementation
      </p>
      <p className="w-full border-b-[0.5px] border-[var(--gray)] p-1.5 flex items-start justify-start roboto hover:text-[var(--lgreen)] hover:underline underline-offset-4">
        structure
      </p>
      <p className="w-full border-b-[0.5px] border-[var(--gray)] p-1.5 flex items-start justify-start roboto hover:text-[var(--lgreen)] hover:underline underline-offset-4">
        partners
      </p>
    </div>
  );
};
export default About_Dropdown;
