import { Card } from "../../components/UI";
import { projects } from "../../assets/provider";

const Development = () => {

  return (
    <div className="xl:px-24 lg:px-32 h-full lg:grid xl:grid-cols-3 lg:grid-cols-2 lg:gap-8 sm:flex sm:flex-col justify-center items-center">
      {projects.map((project) => {
        return (<Card
          key={project.id}
          name={project.name}
          image={project.image}
          description={project.description}
          github={project.github}
          demo={project.demo}
        />);
      })}
    </div>
  );
};

export default Development;