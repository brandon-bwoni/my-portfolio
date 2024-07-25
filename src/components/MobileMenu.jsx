import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuTitle, setMenuTitle] = useState('Projects');
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (title, path) => {
    setIsOpen(false);
    setMenuTitle(title);
    navigate(`/products/${path}`);
  };

  return (
    <div className="flex lg:hidden justify-center md:mb-16 sm:mb-8">
      <div className="relative inline-block text-center">
        <div className="mx-auto">
          <button
            type="button"
            onClick={toggleDropdown}
            className="inline-flex w-56 h-12 px-4 py-2 pb-2 justify-center items-center rounded-md text-white text-sm font-semibold active:text-white hover:text-white shadow-md ring-2 ring-inset ring-white"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            {menuTitle}
            {isOpen ? (
              <RxCaretUp className="ml-24 h-8 w-8 text-green-100" />
            ) : (
              <RxCaretDown className="ml-24 mt-1.5 h-8 w-8 text-green-100" />
            )}
          </button>
        </div>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen
            ? 'absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-slate-800 focus:outline-none'
            : 'max-h-0'
            }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {[
              { title: 'web-apps', path: 'web-app' },
              { title: 'mobile-apps', path: 'mobile-app' },
              { title: 'devops', path: 'devops' },

            ].map((item, index) => (
              <div key={index}>
                <NavLink
                  to={item.path}
                  className="text-slate-800 font-semibold block px-4 py-2 text-sm active:text-orange-300"
                  role="menuitem"
                  id={`menu-item-${index}`}
                  onClick={() => closeMenu(item.title, item.path)}
                >
                  {item.title}
                </NavLink>
                {index < 7 && <hr className="flex w-56 mx-auto" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
