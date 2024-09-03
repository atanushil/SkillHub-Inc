import React from "react";
import { Logo } from "../../utils";

const AboutUs = () => {
  return (
    <section
      id="about-section"
      className="py-16 max-w-screen-xl mx-auto grid lg:grid-cols-4 
      lg:grid-rows-7 px-8  grid-cols-1 grid-rows-9"
    >
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2  
      drop-shadow-[0_3px_3px_rgba(199,87,224,0.8)] caret-transparent
       lg:text-start text-stone-400  text-8xl whitespace-nowrap text-center">
        Our Mission
      </div>

      <div className="lg:col-span-2 lg:row-span-5 lg:col-start-1 lg:row-start-3 row-span-4
       bg-slate/10 flex justify-center items-center">
        <div className="relative group">
          <img
            src={Logo}
            alt="logo"
            className=" object-cover 
            group-hover:drop-shadow-[0_3px_3px_rgba(199,87,224,0.8)] transition-transform 
            duration-500 ease-in-out transform group-hover:scale-110 "
          />
        </div>
      </div>

      <div
        className="lg:col-span-2 lg:row-span-7 lg:col-start-3 lg:row-start-1
        row-span-4 row-start-6 lg:px-0 px-8 h-fit py-4 lg:h-full lg:py-0
         bg-slate/20 lg:grid grid-cols-1 grid-rows-7"
      >
        <div className="row-span-5 row-start-3 px-4 text-stone-300  ">
          At <span className="text-animate">SkillHub </span>, our mission is to
          revolutionize the way developers present their skills and connect with
          job opportunities across the globe. We are dedicated to providing a
          platform that not only highlights your unique talents but also
          verifies them through advanced blockchain technology, ensuring that
          your credentials are both authentic and credible. By bridging the gap
          between exceptional talent and top-notch opportunities, we strive to
          empower developers to achieve their career goals, accelerate their
          growth, and thrive in a competitive job market. Our commitment is to
          foster a supportive community where professionals can unlock their
          full potential and secure their ideal roles.
          <br />
          <a href="/about-us">
            <span className="lg:top-6 top-0 text-xl relative font-medium hover:text-orange-500 hover:underline">
              Learn more
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
