import logo from '../assets/logo.png';
import { PrimaryButton } from './UI';

function Navbar() {
  return (
    // Desktop
    <nav>
      <div className="w-full h-20 flex flex-row items-center justify-between pb-2 pt-2 px-12 shadow-xl pl-6 xl:pl-24 xl:pr-24 bg-orange-200">
        <a href='/'><img src={logo} alt="Logo" className='w-24 h-8 ml-3' /></a>
        <div className='flex justify-center items-center gap-8'>
          <ul className="flex text-slate-700 font-semibold text-sm p-4 m-4 gap-16">
            <li className=''>
              Home
            </li>
            <li className=''>
              Projects
            </li>
            <li className=''>
              <a href="/about"></a>About</li>
            <li className=''>
              <a href="/contact">Contacts</a></li>
          </ul>
          <PrimaryButton name="Resume" />
        </div>
        <div className='hidden justify-center items-center'>
          <a href=''><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-24  md:mr-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg></a>
        </div>
      </div>
    </nav>
  );
}



export default Navbar;