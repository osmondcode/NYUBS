const About_Dropdown = () => {
  return (
    <div className="w-[180px] h-fit flex flex-col items-start justify-start bg-[var(--dark)] opacity-90 absolute z-20 right-[-150px] bottom-[-180px] text-[12px] capitalize rounded-md">
      <p className="w-full border-b-[0.5px] border-[var(--gray)] p-1.5 flex items-start justify-start roboto hover:text-[var(--lgreen)] hover:underline underline-offset-4">
        About the academy
      </p>
      <p className="w-full border-b-[0.5px] border-[var(--gray)] p-1.5 flex items-start justify-start roboto hover:text-[var(--lgreen)] hover:underline underline-offset-4">
        learning managment
      </p>
      <p className="w-full border-b-[0.5px] border-[var(--gray)] p-1.5 flex items-start justify-start roboto hover:text-[var(--lgreen)] hover:underline underline-offset-4">
        live training
      </p>
      <p className="w-full border-b-[0.5px] border-[var(--gray)] p-1.5 flex items-start justify-start roboto hover:text-[var(--lgreen)] hover:underline underline-offset-4">
        mentors
      </p>
      <p className="w-full border-b-[0.5px] border-[var(--gray)] p-1.5 flex items-start justify-start roboto hover:text-[var(--lgreen)] hover:underline underline-offset-4">
        exams/assessments
      </p>
      <p className="w-full border-b-[0.5px] border-[var(--gray)] p-1.5 flex items-start justify-start roboto hover:text-[var(--lgreen)] hover:underline underline-offset-4">
        apply
      </p>
    </div>
  );
};
export default About_Dropdown;
