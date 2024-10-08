import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { NavigationLinks } from "../../constants"; // Assuming this is where your navigation links are stored

const Footer = () => {
  const handleScrollDown = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className=" max-w-screen-xl mx-auto
      to-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center 
       justify-between py-2">
        
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-2 text-gradient-heading">Skiller Hub Inc.</h3>
          <p className="mb-2 text-gradient-sub-heading">Empowering developers worldwide.</p>
          <p className="text-orange-200">Unlock your potential.</p>
        </div>

        <div className="flex space-x-4 justify-center text-gradient-sub-heading">
          {NavigationLinks.map((nav, i) => {
            const sectionId = Object.values(nav)[0];
            return (
              <button
                key={i}
                onClick={() => handleScrollDown(sectionId)}
                className="hover:text-blue-500 transition-colors duration-300"
              >
                {Object.keys(nav)[0]}
              </button>
            );
          })}
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row max-w-screen-xl
      items-center justify-between py-2 border-t border-gray-700">
        
        {/* Follow Us Section */}
        <div className="flex space-x-6 justify-center md:justify-start mb-6 md:mb-0 ">
          <a href="https://www.linkedin.com/in/webdev-atanushil/" className="text-gray-400 hover:text-blue-700 transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://x.com/atanushil358" className="text-gray-400 hover:text-blue-600
            transition-colors duration-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://github.com/atanushil" className="text-gray-400 hover:text-stone-500  transition-colors duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://instagram.com/atanu.notfound" className="text-gray-400 hover:text-pink-500 transition-colors duration-300">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Privacy Policy Section */}
        <div className="flex space-x-4 justify-center text-gradient-sub-heading">
          {["Privacy Policy", "Terms & Conditions", "Cookie Policy"].map((policy) => (
            <a key={policy} href="/" className="hover:text-blue-500 transition-colors duration-300">
              {policy}
            </a>
          ))}
        </div>
      </div>

      <div className="text-center border-t border-gray-700 py-2">
        <p className="text-sm">&copy; 2024 Skiller Hub Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
