const Resume = () => {
  const resume = fetch("../assets/resume.pdf");

  return (
    <div className="flex flex-col justify-center items-center h-full lg:px-24 pt-20  pb-16">
      <h1 className="text-center sm:text-2xl lg:text-3xl font-semibold dark:text-darkText text-lightBtn">
        My <span className="dark:text-orange-500 text-lightText">Resume</span>
      </h1>
      <div></div>
    </div>
  );
};

export default Resume;
