import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { MobileMenu } from '../components/index';

export default function ProjectsLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/projects/development');
  }, []);


  return (
    <div className='h-full pt-24 mb-16'>
      <div className='flex flex-col justify-center'>
        <h1 className="xl:text-3xl sm:text-xl font-semibold text-center text-white">
          My Recent <span className='text-slate-800'>Projects</span></h1>
        <p className='px-6 sm:text-[14px] xl:text-lg font-medium text-center text-white'>Below is a list of projects I've done throughout my tech journey</p>
      </div>
      <div className='bg-bgGreen' id='products'>
        <nav className="lg:mt-8 sm:pt-4 bg-bgGreen">
          <div className="hidden bg-bgGreen lg:flex flex-col h-24 items-center mb-8">
            <div className="flex border-2 border-white rounded-full">
              <NavLink
                to='development'
                className={({ isActive }) =>
                  isActive ? "bg-slate-800 font-semibold text-white active:border-0 rounded-l-full" : ""}
              >
                <button className='border-r-2 border-white xl:w-80 xl:h-16 lg:w-48 md:w-40 md:h-12 font-semibold xl:text-lg text-white  rounded-l-3xl'
                >Software Dev</button>
              </NavLink>
              <NavLink
                to='devops'
                className={({ isActive }) =>
                  isActive ? "bg-slate-800 font-semibold text-white active:border-0" : ""}
              >
                <button className='border-r-2 border-white xl:w-80 xl:h-16 lg:w-48 md:w-40 md:h-12 font-semibold xl:text-lg text-white active:bg-white  active:border-0 '
                >DevOps</button>
              </NavLink>
              <NavLink
                to='design'
                className={({ isActive }) =>
                  isActive ? "bg-slate-800 font-semibold text-white active:border-0 rounded-r-full" : ""}
              >
                <button className=' xl:w-80 xl:h-16 lg:w-48 md:w-40 md:h-12 font-semibold  xl:text-lg text-white active:border-0 rounded-r-3xl'
                >UI/UX Designs</button>
              </NavLink>
            </div >
          </div >
          <MobileMenu />
        </nav >

        <section className=''>
          <Outlet />
        </section>

      </div>
    </div>
  );
}

