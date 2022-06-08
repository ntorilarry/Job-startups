import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "../styles/navbar.css";
import Logo from "../assets/JOBEST.png";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <Disclosure as="nav">
      <div className="w-full h-[90px] bg-transparent  instaNav">
        <div className=" mx-auto px-4 flex justify-between items-center h-full navNEW">
          <div>
            <a href="/">
              <img className="logoo" src={Logo} alt="" />
            </a>
          </div>
          <div className="hidden md:flex">
            <ul className="flex text-white items-center space-x-4">
              <li>
                {" "}
                <a
                  className="border-transparent text-white hover:border-white hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="border-transparent text-white hover:border-white hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  href="/#services"
                >
                  Career Tips
                </a>
              </li>
              <li>
                {" "}
                <a
                  className="border-transparent text-white hover:border-white hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                  href="/#testimonials"
                >
                  Jobs
                </a>
              </li>
            </ul>
          </div>

          {/* Hamburger menu */}
          <div onClick={handleNav} className="block md:hidden">
            {nav ? (
              <AiOutlineClose size={30} className="text-[#112d58]" />
            ) : (
              <AiOutlineMenu size={30} className="text-[#112d58]" />
            )}
          </div>

          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "w-full bg-white text-black absolute top-[70px] left-0 flex justify-center text-center z-10"
                : "absolute left-[-100%] z-10"
            }
          >
            <ul>
              <li>
                <a className="text-lg" href="/">
                  Home
                </a>
              </li>
              <li>
                {" "}
                <a className="text-lg" href="/#services">
                  Career Tips
                </a>
              </li>
              <li>
                {" "}
                <a className="text-lg" href="/#testimonials">
                  Jobs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
