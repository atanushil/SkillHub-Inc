import React from "react";
import { AboutUs, ContactUs, FeaturesSection, Footer, HeroSection, HowItWorks, NavBar, Pricing } from "../utils";

const Home = () => {
  return (
    <div>
      <div className=" sticky top-0 z-10 shadow-md shadow-Purple bg-slate/30 backdrop-blur-sm">
        <NavBar />
      </div>
      <div className="z-0 bg-slate/20">
        <HeroSection/>
      </div>
      <div className="z-0 bg-stone-600/20">
        <FeaturesSection/>
      </div>
      <div className="z-0 bg-slate/10">
        <HowItWorks/>
      </div>
      <div className="z-0 ">
        <Pricing/>
      </div>
      <div className="z-0 bg-slate/20">
        <AboutUs/>
      </div>
      <div className="z-0 bg-slate/30">
        <ContactUs/>
      </div>
      <div className="bg-gradient-to-r from-gray-900 via-gray-800">
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
