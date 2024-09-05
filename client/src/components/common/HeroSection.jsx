import React, { useEffect, useState } from "react";
import { heroImageFirst } from "../../utils"; // Replace with your actual image path

const HeroSection = ({}) => {
  const [count, setCount] = useState(0);
  const targetCount = 10000;

  useEffect(() => {
    const increment = targetCount / 100; // Change this number to control the speed of the increment
    const timer = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < targetCount) {
          return Math.ceil(prevCount + increment); // Increment the count smoothly
        } else {
          clearInterval(timer);
          return targetCount;
        }
      });
    }, 50); // Adjust the interval speed

    return () => clearInterval(timer);
  }, [targetCount]);

  const handleSignUp = () => {
    // Redirect to the sign-up page or handle sign-up logic
  };

  const handleScrollDown = () => {
    const featuresSection = document.getElementById("features-section");
    featuresSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
   
    <div className="hero-section max-w-screen-xl mx-auto px-4  text-white py-24 " id="hero-section">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        {/* Headline and Subheadline */}
        <div className="text-center lg:text-left lg:max-w-lg relative xl:bottom-10">
          <h1 className="text-4xl lg:text-6xl lg:leading-tight 2xl:leading-normal caret-transparent font-bold mb-4">
            Empower Your Career with a Verified Portfolio.
          </h1>
          <p className="lg:text-3xl text-xl text-orange-400 mb-4 caret-transparent"> Trusted by {count.toLocaleString()}+ developers.</p>
          <p className="text-lg lg:text-xl mb-8 text-stone-400 caret-transparent">
            Showcase your skills, find job matches, and secure your future with
            SkillHub.
          </p>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
            <button
              onClick={handleSignUp}
              className="btn-primary text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Get Start Now
            </button>
            <button
              onClick={handleScrollDown}
              className="btn-secondary text-blue-600  hover:text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
        {/* Hero Image/Illustration */}
        <div className="mt-10 lg:mt-0 lg:ml-10">
          <img
            src={heroImageFirst} 
            alt="Hero Illustration"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
