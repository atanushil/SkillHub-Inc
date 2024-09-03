import React from "react";
import { HeroSection, NavBar } from "../utils";

const Home = () => {
  return (
    <div>
      <div className="bg-white/30 backdrop-blur-lg">
        <NavBar />
      </div>
      <div>
        <HeroSection/>
      </div>
    </div>
  );
};

export default Home;
