import React from "react";
import ReactDOM from "react-dom/client";

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
        class={`${
          isMenuOpen ? "" : "hidden"
        } fixed inset-0 bg-gray-400 bg-opacity-50 duration-75`}
        onClick={B}
      ></div>
      
      <nav class="bg-local flex p-4 justify-between items-center  bg-gradient-to-b from-gray-800 via-gray-900 to-black border-b-2  border-gray-800">
        <a href="#" id="brand " class="min-w-fit ">
          <img src="./src/assets/conf.png" alt="conf-logo" className="w-20" />
        </a>
        <div id="nav-menu" class="hidden md:flex gap-10 ">
          <a
            href="#"
            class="relative text-gray-300 font-display after:content-[''] after:absolute after:right-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-200 hover:after:w-full leading-4"
          >
            About
          </a>
          <a
            href="#"
            class="relative text-gray-300 font-display after:content-[''] after:absolute after:right-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-200 hover:after:w-full leading-4"
          >
            Portfolio
          </a>
          <a
            href="#"
            class="relative text-gray-300 font-display after:content-[''] after:absolute after:right-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-200 hover:after:w-full leading-4"
          >
            Workshops
          </a>
          <a
            href="#"
            class="relative text-gray-300 font-display after:content-[''] after:absolute after:right-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-200 hover:after:w-full leading-4"
          >
            Services
          </a>
          <a
            href="#"
            class="relative text-gray-300 font-display after:content-[''] after:absolute after:right-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-200 hover:after:w-full leading-4"
          >
            Contact us
          </a>
        </div>
        <a href="#" className="hover:scale-125 transition-all duration-200">
          <i class="fa-brands fa-instagram text-white w-12 fa-xl hidden md:inline "></i>
        </a>

        <button id="toggle" class="m-1 md:hidden" onClick={A}>
          <i class="fa-solid fa-bars fa-2xl text-white"></i>
        </button>

        <div
          id="ham-menu"
          class={`${
            isMenuOpen
              ? "animate-slideIn"
              : hasTog
              ? "animate-slideOut"
              : "hidden"
          }    inset-0 md:hidden  bg-black z-40 flex flex-col px-6 pb-8 pt-3 w-2/3 min-w-fit fixed h-screen `}
        >
          <a href="#" id="brand " class="min-w-fit">
            <img src="./src/assets/conf.png" alt="conf-logo" className="w-20" />
          </a>
          <div className="w-full h-1 bg-slate-300 mt-4  rounded-full"></div>
          <a
            href="#"
            class="font-medium text-slate-300 border-b-2 border-slate-300 hover:transition-all hover:duration-500 hover:ease-out hover:bg-slate-500 hover:text-white p-4 rounded-md"
          >
            About
          </a>
          <a
            href="#"
            class="font-medium text-slate-300 border-b-2 border-slate-300 hover:transition-all hover:duration-500 hover:ease-out hover:bg-slate-500 hover:text-white p-4 rounded-md"
          >
            Portfolio
          </a>
          <a
            href="#"
            class="font-medium text-slate-300 border-b-2 border-slate-300 hover:transition-all hover:duration-500 hover:ease-out hover:bg-slate-500 hover:text-white p-4 rounded-md"
          >
            Workshops
          </a>
          <a
            href="#"
            class="font-medium text-slate-300 border-b-2 border-slate-300 hover:transition-all hover:duration-500 hover:ease-out hover:bg-slate-500 hover:text-white p-4 rounded-md"
          >
            Service
          </a>
          <a
            href="#"
            class="font-medium text-slate-300 border-b-2 border-slate-300 hover:transition-all hover:duration-500 hover:ease-out hover:bg-slate-500 hover:text-white p-4 rounded-md"
          >
            Contact us
          </a>
          
        </div>
      </nav>
    </>
  );
}
