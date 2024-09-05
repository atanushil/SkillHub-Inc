import React, { useState, useEffect } from "react";
import { Logo } from "../../utils";
import { NavigationLinks } from "../../constants";

const Navbar = ({ activeSectionId }) => {
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

  useEffect(() => {
    if (activeSectionId) {
      const activeNav = NavigationLinks.find(
        (nav) => Object.values(nav)[0] === activeSectionId
      );
      if (activeNav) {
        setSelected(activeNav);
      }
    }
  }, [activeSectionId]);

  return (
    <nav className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
      <div
        className="flex items-center caret-transparent cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <img src={Logo} alt="Logo" className="w-16" />
        <p className="text-animate gotu-regular italic text-2xl ml-2 mt-4">
          Skiller Hub 
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
                  ? "text-orange-400 border-b-2 border-white"
                  : "hover:text-orange-300"
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-10 w-10 text-white m-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        {open && (
          <div className="absolute right-0 top-14 p-4 bg-slate min-h-screen w-full z-30">
            <ul className="my-2">
              {NavigationLinks.map((nav, i) => {
                const sectionId = Object.values(nav)[0];
                return (
                  <li
                    key={i}
                    className={`py-1 cursor-pointer ${
                      selected === nav
                        ? "text-orange-500 border-b-2 border-white font-bold"
                        : "text-stone-400 hover:text-orange-400"
                    }`}
                    onClick={() => handleNavClick(nav, sectionId)}
                  >
                    {Object.keys(nav)[0]}
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-4 mt-4">
              <button className="border rounded-lg py-2 text-xl border-stone-400 text-white">
                Log In
              </button>
              <button className="rounded-lg py-2 text-xl text-white border-white bg-stone-600">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
