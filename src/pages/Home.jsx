import { Hero, Intro, Projects, Services } from "../components/index";
import { Card } from "../components/UI";


const Home = () => {
  return (
    <div className="">
      <Hero />
      <Intro />
      <Services />
      <Projects />
    </div>
  );
};

export default Home;