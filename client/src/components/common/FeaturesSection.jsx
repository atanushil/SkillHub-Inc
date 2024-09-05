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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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

  useGSAP(() => {
    // GSAP animation for main heading, subheading, and lower heading
    gsap.fromTo(
      '.heading, .subheading, .lower-heading',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '#features-section',
          start: 'left center',
          toggleActions: 'play pause restart pause',
        },
      }
    );

    // ScrollTrigger animation for the features section
    gsap.fromTo(
      '.feature',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '#features-section',
          start: 'left center',
          toggleActions: 'play pause restart pause',
        },
      }
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Animate feature change
  useEffect(() => {
    if (!isTransitioning) {
      gsap.fromTo(
        ".feature-title, .feature-desc, .feature-icon",
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: "power4.out" }
      );
    }
  }, [currentIndex, isTransitioning]);

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

  const { icon, title, description, cta, link } = features[currentIndex];

  return (
    <section className="py-16 px-6 max-w-screen-xl mx-auto" id="features-section">
      <div className="text-center mb-6">
        <h2 className="text-4xl text-white font-bold mb-4 caret-transparent heading">
          Why Choose SkillHub?
        </h2>
        <p className="text-lg text-stone-400 caret-transparent subheading">
          Discover the powerful tools and features designed to elevate your career and connect you with global opportunities.
        </p>
      </div>

      <div className="relative px-4">
        <button
          onClick={handlePrev}
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 z-0 overflow-hidden
           border-r text-white p-6 rounded-full"
        >
          <GrPrevious className="relative left-3" />
        </button>

        <div
          className={`sm:grid grid-cols-6 grid-rows-5 gap-4 feature bg-white/20
             transition duration-500 ease-in-out transform ${
               isTransitioning ? "blur-sm opacity-50" : "opacity-100"
             }`}
        >
          <div className="col-span-6 flex justify-center items-center">
            <p className="text-stone-200 sm:text-4xl uppercase whitespace-normal feature-title">
              {title}
            </p>
          </div>
          <div
            className="col-span-2 row-span-4 row-start-2 sm:h-60 h-40 py-4 sm:py-0
          flex items-center justify-center feature-icon"
          >
            <img
              src={icon}
              alt={title}
              className="object-contain sm:h-60 h-32 sm:mb-8
              drop-shadow-[1px_3px_3px_rgba(199,92,224,0.8)] 
            transition-transform duration-500 ease-in-out transform"
            />
          </div>
          <div
            className="col-span-4 row-span-4 col-start-3 row-start-2 py-8 px-4 flex flex-col feature-desc"
          >
            <span className="text-stone-300">{description}</span>
            <a
              className="text-orange-300 hover:text-orange-500 hover:underline 
            after:content-['_↗'] cursor-pointer
             after:ml-1 after:transition-transform duration-500
             hover:after:translate-x-1 hover:after:-translate-y-1"
              href={link}
            >
              {cta}
            </a>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-10 overflow-hidden
           border-l text-white p-6 rounded-full"
        >
          <GrNext className="relative right-3" />
        </button>
      </div>

      <div className="text-center pt-12 pb-4">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r 
        from-orange-300 to-stone-200 lower-heading">
          Ready to take your career to the next level?
        </h2>
        <button className="btn-primary relative mt-4 py-2 text-transparent 
        bg-clip-text bg-gradient-to-r 
        from-orange-300 to-stone-200">Sign Up Now</button>
      </div>
    </section>
  );
};

export default FeaturesSection;
