const Resume = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full lg:px-24 pt-20  pb-16">
      <h1 className="text-center sm:text-2xl lg:text-3xl font-semibold dark:text-darkText text-lightBtn">
        My <span className="dark:text-orange-500 text-lightText">Resume</span>
      </h1>
      <div className="flex flex-col justify-center w-full pt-4 px-6">
        <div className="flex justify-center pb-4">
          <a
            href="docs/brandon_resume.pdf"
            className="rounded-xl px-3 py-2 hover:cursor-pointer hover:border-none dark:hover:bg-blue-900 dark:text-darkText text-lightText  hover:bg-lightBtn/30"
            download="brandon_resume.pdf"
            target="_blank"
          >
            Download resume
          </a>
        </div>
        <embed
          src="/docs/brandon_resume.pdf"
          width="100%"
          height="100%"
          className="h-[600px] lg:h-[920px] border rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Resume;
