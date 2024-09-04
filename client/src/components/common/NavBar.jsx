import React, { useState } from "react";
import { Logo } from "../../utils";
import { NavigationLinks } from "../../constants";

const Navbar = () => {
  const [selected, setSelected] = useState(NavigationLinks[0]);
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const handleScrollDown = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (nav, sectionId) => {
    setSelected(nav);
    handleScrollDown(sectionId);
  };

  return (
    <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-4
     shadow-md shadow-Purple bg-slate/30 backdrop-blur-sm">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-16" />
        <p className="text-animate font-mono  text-xl ml-2">
          Skillhub Inc.
        </p>
      </div>

      <ul className="hidden lg:flex gap-4 text-Teal">
        {NavigationLinks.map((nav, i) => {
          const sectionId = Object.values(nav)[0];
          return (
            <li
              key={i}
              className={`cursor-pointer caret-transparent ${
                selected === nav
                  ? "text-white border-b-2 border-white"
                  : "nav-link border-b-animation hover:text-animate"
              }`}
              onClick={() => handleNavClick(nav, sectionId)}
            >
              {Object.keys(nav)[0]}
            </li>
          );
        })}
      </ul>

      <div className="hidden lg:flex gap-4">
        <button className="btn-primary">Log In</button>
        <button className="btn-secondary">Sign Up</button>
      </div>

      <div className="lg:hidden flex items-center" onClick={handleDrawer}>
        <button className="btn-secondary  text-sm py-1 caret-transparent">Sign Up</button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-10 w-10  text-white m-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {open && (
          <div className="absolute right-0 top-14 p-4 bg-white/70 backdrop-blur-sm w-full">
            <ul className="my-2">
              {NavigationLinks.map((nav, i) => {
                const sectionId = Object.values(nav)[0];
                return (
                  <li
                    key={i}
                    className={`py-1 cursor-pointer  ${
                      selected === nav
                        ? "text-Blue border-b-2 border-Blue font-bold"
                        : "nav-link border-b-animation hover:text-animate "
                    }`}
                    onClick={() => handleNavClick(nav, sectionId)}
                  >
                    {Object.keys(nav)[0]}
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-4 mt-4">
              <button className="btn-primary py-2 text-xl border-slate text-slate">Log In</button>
              <button className="btn-secondary py-2 text-xl">Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
