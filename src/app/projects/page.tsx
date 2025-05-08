import ProjectCard from "../../components/UI/ProjectCard";
import { projects } from "@/assets/provider";

const Projects = () => {
  return (
    <div className="h-full mx-2 pt-20 pb-12">
      <h1 className="text-center font-semibold text-3xl  dark:text-darkText text-lightBtn">
        My
        <span className="dark:text-orange-500 text-lightText"> Projects</span>
      </h1>
      <p className="pt-2 mb-4 text-center text-lightText dark:text-darkText">
        Here is a least of projects I have been working on.
      </p>
      <div className="flex flex-wrap justify-around gap-8 gap-y-8 mb-8 xl:mx-20">
        {projects.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              id={item.id}
              image={item.image}
              description={item.description}
              name={item.name}
              github={item.github}
              demo={item.demo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
