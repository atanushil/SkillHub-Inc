import React, { useState } from "react";
import { Logo } from "../../utils";
import { NavigationLinks } from "../../constants";

const Navbar = () => {
  const [selected, setSelected] = useState(NavigationLinks[0]);
  const [open, setOpen] = useState(false);
  const handelDrawer=()=>{
    setOpen(prev=>!prev)
  }
  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
      
      <div className="logo relative flex items-center">
        <img src={Logo} alt="Logo" className="w-16" />
        <p className="text-animate font-mono uppercase text-xl">
          Empowering Career
        </p>
      </div>
      <div className="NavigationLinks  gap-2 text-Teal relative lg:flex hidden">
        {NavigationLinks.map((nav, i) => (
          <div
            className={`${
              selected === nav
                ? "text-white border-b-2 cursor-pointer"
                : "nav-link mx-2 border-b-animation hover:text-animate"
            } caret-transparent `}
            onClick={() => setSelected(nav)}
            key={i}
          >
            {nav}
          </div>
        ))}
      </div>

      <div className="btn lg:flex hidden gap-4">
        <button className="btn-primary">Log In</button>
        <button className="btn-secondary">Sign Up</button>
      </div>
      <div className="small-screen lg:hidden block" onClick={handelDrawer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {open && (

          <div className=" absolute right-0 top-14 p-4  bg-white/30 backdrop-blur-md w-full">
            <div className="my-2">
              {NavigationLinks.map((nav, i) => (
                <div
                  className={`${
                    selected === nav
                      ? "text-Blue border-b-2 cursor-pointer border-Blue font-bold"
                      : "nav-link border-b-animation hover:text-animate "
                  } caret-transparent py-1`}
                  onClick={() => setSelected(nav)}
                  key={i}
                >
                  {nav}
                </div>
              ))}
            </div>
            <div className="btn flex flex-col gap-4">
              <button className="btn-primary text-black border-Blue py-2 text-xl">Log In</button>
              <button className="btn-secondary text-xl py-2">Sign Up</button>
            </div>
          </div>

        )}
      </div>

    </div>
  );
};

export default Navbar;
