import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [hasTog, sethasTog] = React.useState(false);

  function A() {
    setMenuOpen(!isMenuOpen);
    sethasTog(true);
  }

  function B() {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <div
        id="overlay"
        className={`${
          isMenuOpen ? "" : "hidden"
        } fixed inset-0 bg-gray-400 bg-opacity-50 duration-75`}
        onClick={B}
      ></div>

      <nav className="bg-local flex p-4 justify-between items-center bg-gradient-to-b from-gray-800 via-gray-900 to-black border-b-2 border-gray-800">
        <Link to="/Photowalks" className="min-w-fit">
          <img src="./src/assets/conf.png" alt="conf-logo" className="w-20" />
        </Link>
        <div id="nav-menu" className="hidden md:flex gap-10">
          <Link
            to="/"
            className="relative text-gray-300 font-display after:content-[''] after:absolute after:right-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-200 hover:after:w-full leading-4"
          >
            Home
          </Link>
          <Link
            to="/Portfolio"
            className="relative text-gray-300 font-display after:content-[''] after:absolute after:right-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-200 hover:after:w-full leading-4"
          >
            Portfolio
          </Link>
          <Link
            to="/Photowalks"
            className="relative text-gray-300 font-display after:content-[''] after:absolute after:right-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-200 hover:after:w-full leading-4"
          >
            Photowalks
          </Link>
          <Link
            to="/Services"
            className="relative text-gray-300 font-display after:content-[''] after:absolute after:right-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-200 hover:after:w-full leading-4"
          >
            Services
          </Link>
          <Link
            to="/Contact"
            className="relative text-gray-300 font-display after:content-[''] after:absolute after:right-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-200 hover:after:w-full leading-4"
          >
            Contact Us
          </Link>
        </div>

        <Link to="/Instagram" className="hover:scale-125 transition-all duration-200">
          <i className="fa-brands fa-instagram text-white w-12 fa-xl hidden md:inline"></i>
        </Link>

        <button id="toggle" className="m-1 md:hidden" onClick={A}>
          <i className="fa-solid fa-bars fa-2xl text-white"></i>
        </button>

        <div
          id="ham-menu"
          className={`${
            isMenuOpen
              ? "animate-slideIn"
              : hasTog
              ? "animate-slideOut"
              : "hidden"
          } inset-0 md:hidden bg-black z-40 flex flex-col px-6 pb-8 pt-3 w-2/3 min-w-fit fixed h-screen`}
        >
          <Link to="/Photowalks" className="min-w-fit">
            <img src="./src/assets/conf.png" alt="conf-logo" className="w-20" />
          </Link>
          <div className="w-full h-1 bg-slate-300 mt-4 rounded-full"></div>
          <Link
            to="/"
            className="font-medium text-slate-300 border-b-2 border-slate-300 hover:transition-all hover:duration-500 hover:ease-out hover:bg-slate-500 hover:text-white p-4 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/Portfolio"
            className="font-medium text-slate-300 border-b-2 border-slate-300 hover:transition-all hover:duration-500 hover:ease-out hover:bg-slate-500 hover:text-white p-4 rounded-md"
          >
            Portfolio
          </Link>
          <Link
            to="/Workshops"
            className="font-medium text-slate-300 border-b-2 border-slate-300 hover:transition-all hover:duration-500 hover:ease-out hover:bg-slate-500 hover:text-white p-4 rounded-md"
          >
            Workshops
          </Link>
          <Link
            to="/Services"
            className="font-medium text-slate-300 border-b-2 border-slate-300 hover:transition-all hover:duration-500 hover:ease-out hover:bg-slate-500 hover:text-white p-4 rounded-md"
          >
            Services
          </Link>
          <Link
            to="/Contact"
            className="font-medium text-slate-300 border-b-2 border-slate-300 hover:transition-all hover:duration-500 hover:ease-out hover:bg-slate-500 hover:text-white p-4 rounded-md"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </>
  );
}
