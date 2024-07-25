import { Outlet } from 'react-router-dom';

import { Nav, Footer } from '../components/index';



const MainLayout = () => {
  return (
    <div className='dark:bg-slate-800 bg-gradient-to-br from-orange-300 from:30% via-pink-300 via:50% from:70% to-orange-300 overflow-x-none'>
      <header>
        <Nav />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;