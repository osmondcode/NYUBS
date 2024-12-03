const Services_Dropdown = () => {
  return (
    <div className="w-[200px] h-fit flex flex-col items-start justify-start bg-[var(--dark)] opacity-90 absolute z-20 right-[-160px] bottom-[-170px] text-[12px] rounded-md">
      <p className="w-full border-b-[0.5px] border-[var(--gray)] p-1.5 flex items-start justify-start roboto hover:text-[var(--lgreen)] hover:underline underline-offset-4">
        Social Assistance Program
      </p>
      <p className="w-full border-b-[0.5px] border-[var(--gray)] p-1.5 flex items-start justify-start roboto hover:text-[var(--lgreen)] hover:underline underline-offset-4">
        FUND/Grants
      </p>
      <p className="w-full border-b-[0.5px] border-[var(--gray)] p-1.5 flex items-start justify-start roboto hover:text-[var(--lgreen)] hover:underline underline-offset-4">
        Renewed Skills Academy (RSA)
      </p>
      <p className="w-full border-b-[0.5px] border-[var(--gray)] p-1.5 flex items-start justify-start roboto hover:text-[var(--lgreen)] hover:underline underline-offset-4">
        Youth Registry
      </p>
      <p className="w-full border-b-[0.5px] border-[var(--gray)] p-1.5 flex items-start justify-start roboto hover:text-[var(--lgreen)] hover:underline underline-offset-4">
        Volunteerism and Civic Participation
      </p>
    </div>
  );
};
export default Services_Dropdown;
