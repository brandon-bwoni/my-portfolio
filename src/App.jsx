import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route

} from "react-router-dom";

import Home from "./pages/Home";
import MainLayout from "./Layout/MainLayout";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      {/* <Route index element={<Home />} /> */}

    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;