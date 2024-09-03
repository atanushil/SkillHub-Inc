import React from "react";
import { AutoScroll, heroImageFirst, heroImageSecond } from "../../utils";

const HeroSection = () => {
  const handelSignUp = () => {};
  const handelScrollDown = () => {};
  return (
    <div className="grid grid-cols-5 grid-rows-7 gap-2 max-w-screen-xl mx-auto px-4 py-2">
      <div className="col-span-3 row-span-7 headline relative ">
        <img
          src={heroImageFirst}
          alt="hero-img-connect"
          className=" mix-blend-overlay rounded-lg"
        />
        <div className=" absolute bottom-0 bg-white/30 backdrop-blur-md flex items-center text-Beige">
          <p className="px-2 text-md">
            Empower your career with SkillHub—showcase your skills, find job
            matches, and secure your future with a verified portfolio.
          </p>
          <button
            onClick={handelSignUp}
            className="border py-3 px-2 btn-primary rounded-none bg-transparent w-1/3"
          >
            Get Start Now
          </button>
        </div>
      </div>
      <div className="sub-headline">
        <div className="px-4 py-2">
          <p className="w-full h-full text-xl text-Beige font-bold text-center">
            Join a global developer community and unlock worldwide
            opportunities.
          </p>
        </div>
        <div className="h-full bg-white">
          <img
            src={heroImageSecond}
            alt="hero-img-community"
            className="h-full object-fit mix-blend-multiply"
          />
        </div>
      </div>

      <div className="features">
      <p className="text-xl text-white p-1">Top Client Achievement</p>
      <div className="w-full px-2">
      <AutoScroll direction={"left-right"} /> 
      <AutoScroll direction={"right-left"}/>
      </div>
      </div>
      <div className="col-span-2 col-start-4 row-start-7 explore-btn p-4">
        <button
          onClick={handelScrollDown}
          className="w-full btn-primary py-2 h-full"
        >
          Explore Opportunities
        </button>
        {/* Scrolls down to the features or job listings section */}
      </div>
    </div>
  );
};

export default HeroSection;
