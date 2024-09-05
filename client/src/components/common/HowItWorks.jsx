import React from "react";
import {
  FiUserPlus,
  FiCheckCircle,
  FiSearch,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";
import { GiPaperPlane } from "react-icons/gi";

const steps = [
  {
    icon: <FiUserPlus />,
    title: "Sign Up and Create Your Profile",
    description:
      "Start by creating a free account on SkillHub. Fill in your basic details, and set up your profile with information about your skills, experience, and career goals.",
  },
  {
    icon: <FiCheckCircle />,
    title: "Build and Verify Your Portfolio",
    description:
      "Showcase your skills by building a detailed portfolio. Upload your projects, certifications, and experiences. SkillHub uses blockchain technology to verify your credentials, ensuring authenticity.",
  },
  {
    icon: <FiSearch />,
    title: "Explore Job Matches",
    description:
      "SkillHub’s advanced matching algorithm connects you with job opportunities that align with your skills and preferences. Browse through recommended jobs, and find the perfect fit for your career.",
  },
  {
    icon: <GiPaperPlane />,
    title: "Apply Directly Through SkillHub",
    description:
      "Once you find a job that interests you, you can apply directly through SkillHub. Your verified portfolio and resume will be sent to employers, increasing your chances of getting noticed.",
  },
  {
    icon: <FiUsers />,
    title: "Connect and Grow Your Network",
    description:
      "Join a global community of developers, engage in discussions, share insights, and expand your professional network. SkillHub offers opportunities to connect with peers, mentors, and industry leaders.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Get Hired and Advance Your Career",
    description:
      "Once you’ve landed your dream job, SkillHub continues to support your career growth. Keep your portfolio updated, receive feedback, and explore new opportunities as your career evolves.",
  },
];

const HowItWorks = () => {
  return (
    <section id="work-section" className="py-16 max-w-screen-xl mx-auto ">
      <div className="px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gradient-heading">
          Getting Started with SkillHub
        </h2>
        <p className="mt-4 text-lg text-gray-400 text-gradient-sub-heading">
          Follow these simple steps to showcase your skills and connect with
          global job opportunities.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group p-6 bg-white/50 backdrop-blur-sm shadow-lg rounded-lg cursor-pointer
               transition-transform duration-300 hover:bg-white/50
               hover:scale-105 hover:shadow-2xl hover:relative hover:shadow-Purple"
            >
              <div className="relative z-10 flex text-stone-500
               group-hover:text-orange-400 text-4xl items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-stone-500 group-hover:text-gradient-heading">
                {step.title}
              </h3>
              <p className="mt-2 text-stone-500 group-hover:text-gradient-heading">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
