import React from "react";
import { FeaturesSection, HeroSection, NavBar } from "../utils";

const Home = () => {
  return (
    <div>
      <div className=" sticky top-0 z-10 ">
        <NavBar />
      </div>
      <div className="z-0">
        <HeroSection/>
      </div>
      <div className="z-0">
        <FeaturesSection/>
      </div>
    </div>
  );
};

export default Home;
