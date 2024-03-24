import Hero from "../Hero";
import Navbar from "../Navbar";

function layout(children) {
  return (
    <div>
      <Navbar />
      <Hero />
      {children}
    </div>
  );
}

export default layout;