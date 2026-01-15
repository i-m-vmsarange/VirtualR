import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";
import { useState } from "react";
const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleMobileDrawer = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 backdrop-blur-lg z-50 py-3 border-b border-b-neutral-700/80 w-full">
        {/* Container Div */}
        <div className="container px-4 realtive lg:text-sm mx-auto">
          {/* Div to fix the alignment of items */}
          <div className="flex items-center justify-between">
            {/* Logo Div */}
            <div className="logo  flex items-center shrink-0">
              <img src={logo} alt="logo-img" className="w-10 h-10 mr-2" />
              <span className="text-xl tracking-tight">VirtualR</span>
            </div>
            {/* NavLinks */}
            <ul className="nav-links  hidden lg:flex ml-14 space-x-12 ">
              {navItems.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                );
              })}
            </ul>
            {/* Buttons */}
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a
                href="#"
                className="px-3 py-2 rounded-md border  border-amber-50"
              >
                Sign In
              </a>
              <a
                href="#"
                className="bg-linear-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md "
              >
                Create an account
              </a>
            </div>
            {/* Menu Icon on medium screens */}
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleMobileDrawer}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {/* Nav links visible on medium screens */}
          {mobileDrawerOpen && (
            <div className="fixed right-0 z-20 w-full lg:hidden p-12 md:flex flex-col  justify-between items-center  bg-neutral-900">
              <ul className="flex flex-col justify-center items-center ">
                {navItems.map((item, index) => (
                  <li key={index} className="py-4">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-row space-x-6 justify-center items-center">
                <a
                  href="#"
                  className="px-3 py-2 border border-amber-50 rounded-md"
                >
                  Sign In
                </a>
                <a
                  href="#"
                  className="px-3 py-2 bg-linear-to-r from-orange-500 to-orange-800 rounded-md"
                >
                  Create an account
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
