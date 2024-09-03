import React from "react";
import { HeroSection, NavBar } from "../utils";

const Home = () => {
  return (
    <div>
      <div className="border-b sticky top-0 z-10">
        <NavBar />
      </div>
      <div className="z-0">
        <HeroSection/>
      </div>
    </div>
  );
};

export default Home;
