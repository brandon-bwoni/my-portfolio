import { Outlet } from 'react-router-dom';

import { Nav, Sidebar } from '../components/index';
import { Hero, About, Projects } from "../components/index";


const MainLayout = () => {
  return (
    <>
      <div className="h-screen grid grid-cols-custom_layout bg-slate-400  overflow-x-hidden bg-opacity-20">
        <section className=" bg-green-200">
          <Sidebar />
        </section>
        <main className="no-scrollbar overflow-y-auto">
          <Nav />
          <Hero />
          <div className='bg-no-repeat '>
            <About />
            <Projects />
          </div>
        </main>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;