import { Card } from "../../components/UI";
import { projects } from "../../assets/provider";

const Design = () => {
  return (
    <div className="h-full grid grid-cols-4 gap-12">
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

export default Design;