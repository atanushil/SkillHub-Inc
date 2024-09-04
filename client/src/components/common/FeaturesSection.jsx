import React, { useState, useEffect } from "react";
import {
  AIDrivenIcon,
  PortfolioIcon,
  DecentralizedIcon,
  ATSIcon,
  JobMatchingIcon,
  BlockchainIcon,
  CommunityIcon,
  IntegrationIcon,
  AnalyticsIcon,
} from "../../utils"; 
import { GrNext, GrPrevious } from "react-icons/gr";

const FeaturesSection = () => {
  const features = [
    {
      icon: PortfolioIcon,
      title: "Verified Skill Portfolios",
      description:
        "Showcase your skills with confidence. SkillHub allows you to create a verified portfolio, ensuring that your accomplishments are recognized by employers worldwide.",
      cta: "Learn More",
      link: "/portfolio-verification",
    },
    {
      icon: JobMatchingIcon,
      title: "Global Job Matching",
      description:
        "SkillHub connects you with job opportunities tailored to your skill set, location, and career goals. Whether you're looking for remote work or relocating, we've got you covered.",
      cta: "Start Your Search",
      link: "/job-search",
    },
    {
      icon: BlockchainIcon,
      title: "Blockchain-Based Skill Verification",
      description:
        "SkillHub leverages blockchain technology to verify your skills, ensuring that your credentials are secure, tamper-proof, and trusted by employers.",
      cta: "Explore Blockchain Benefits",
      link: "/blockchain-verification",
    },
    {
      icon: CommunityIcon,
      title: "Developer Community and Networking",
      description:
        "Join a vibrant community of developers. Share your knowledge, learn from others, and expand your network to unlock new career opportunities.",
      cta: "Join the Community",
      link: "/community",
    },
    {
      icon: AnalyticsIcon,
      title: "Advanced Analytics and Insights",
      description:
        "Track your portfolio views, job matches, and application statuses with our advanced analytics dashboard, helping you optimize your job search strategy.",
      cta: "View Your Dashboard",
      link: "/analytics-dashboard",
    },
    {
      icon: IntegrationIcon,
      title: "Seamless Integration with Top Job Platforms",
      description:
        "SkillHub integrates with leading job platforms, making it easier for you to apply for jobs directly from your SkillHub portfolio.",
      cta: "See Integrations",
      link: "/integrations",
    },
    {
      icon: AIDrivenIcon,
      title: "AI-Driven Job Matching",
      description:
        "Leverage AI to get matched with job opportunities that fit your skills and preferences. Our intelligent algorithms ensure the best job recommendations.",
      cta: "Discover AI Matching",
      link: "/ai-job-matching",
    },
    {
      icon: DecentralizedIcon,
      title: "Decentralized Credential Verification",
      description:
        "Ensure your credentials are secure and verified on the blockchain. Our decentralized approach guarantees authenticity and trustworthiness.",
      cta: "Learn About Decentralization",
      link: "/decentralized-verification",
    },
    {
      icon: ATSIcon,
      title: "ATS-Optimized Resume Builder",
      description:
        "Create a resume that passes through applicant tracking systems effortlessly. Our resume builder is designed to meet ATS requirements.",
      cta: "Build Your Resume",
      link: "/resume-builder",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? features.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === features.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 500);
  };

  const { icon, title, description, cta } = features[currentIndex];

  return (
    <section
      className="py-16 px-6 max-w-screen-xl mx-auto"
      id="features-section"
    >
      <div className="text-center mb-6">
        <h2 className="text-4xl text-white font-bold mb-4 caret-transparent">
          Why Choose SkillHub?
        </h2>
        <p className="text-lg text-stone-400 caret-transparent">
          Discover the powerful tools and features designed to elevate your
          career and connect you with global opportunities.
        </p>
      </div>

      <div className="relative px-4 ">
        <button
          onClick={handlePrev}
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-20 overflow-hidden
           border-r text-white p-6 rounded-full"
        >
          <GrPrevious className="relative left-3" />
        </button>

        <div
          className={`sm:grid grid-cols-6 grid-rows-5 gap-4  feature  bg-white/20
             transition duration-500 ease-in-out transform ${
               isTransitioning ? "blur-sm opacity-50" : "opacity-100"
             }`}
        >
          <div className="col-span-6 flex justify-center items-center ">
            <p className="text-stone-200 sm:text-4xl uppercase whitespace-normal">
              {title}
            </p>
          </div>
          <div
            className="col-span-2 row-span-4 row-start-2 sm:h-60 h-40 py-4 sm:py-0
          flex items-center justify-center"
          >
            <img
              src={icon}
              alt={title}
              className="object-contain sm:h-60 h-32 sm:mb-8
              drop-shadow-[1px_3px_3px_rgba(199,92,224,0.8)] 
            transition-transform duration-500 ease-in-out transform "
          />
          </div>
          <div className="col-span-4 row-span-4 col-start-3 row-start-2  py-8 px-4 flex flex-col">
            <span className="text-stone-300"> {description}</span>
            <span className="text-orange-300 ">{cta}</span>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 overflow-hidden
            text-white p-6 rounded-full border-l"
        >
          <GrNext className="relative right-3" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute -bottom-4 left-0 right-0 flex justify-center space-x-2">
          {features.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <h3 className="text-3xl font-bold mb-8 text-stone-400 caret-transparent">
          Ready to take your career to the next level?
        </h3>
        <a href="/sign-up" className="btn-secondary py-3 px-8">
          Sign Up Now
        </a>
      </div>
    </section>
  );
};

export default FeaturesSection;
