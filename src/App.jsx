import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route

} from "react-router-dom";

import { Home, About, Contact, Resume } from "./pages/index";
import { MainLayout, ProjectsLayout } from "./Layout/index";
import { Design, Development, Devops } from "./projects/index";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<ProjectsLayout />}>
        <Route path="development" element={<Development />} />
        <Route path="devops" element={<Devops />} />
        <Route path="design" element={<Design />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="oveflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;