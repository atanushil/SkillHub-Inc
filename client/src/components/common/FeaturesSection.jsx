import React, { useState } from "react";
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
} from "../../utils"; // Adjust the import path according to your directory structure

const SkillHubFeaturesSection = () => {
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

  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <section className="py-16 px-6 max-w-screen-xl mx-auto" id="features-section">
      <div className="text-center mb-6">
        <h2 className="text-4xl text-white font-bold mb-4 caret-transparent">
          Why Choose SkillHub?
        </h2>
        <p className="text-lg text-stone-400 caret-transparent">
          Discover the powerful tools and features designed to elevate your
          career and connect you with global opportunities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 w-full rounded-lg">
        {/* Selected Feature Panel */}
        <div className="md:col-span-4 bg-[#0D1425]/50 backdrop-blur-sm p-4">
          <div className="grid gap-4">
            <h3 className="text-2xl text-white font-semibold mb-4 caret-transparent">
              {selectedFeature.title}
            </h3>
            <div className="flex justify-between items-center">
              <img
                src={selectedFeature.icon}
                alt={selectedFeature.title}
                className="w-1/3 object-contain h-full transform transition-transform duration-300 hover:scale-110"
              />
              <div className="p-4 flex flex-col justify-between h-full">
                <p className="text-gray-400 text-2xl caret-transparent">
                  {selectedFeature.description}
                </p>
                {selectedFeature.cta && (
                  <a
                    href={selectedFeature.link}
                    className="text-blue-400 hover:text-blue-600 hover:underline font-semibold caret-transparent"
                  >
                    {selectedFeature.cta}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="md:col-span-2">
          <ul className="md:block overflow-x-auto flex">
            {features.map((feature, i) => (
              <li
                key={i}
                className={`cursor-pointer md:p-2 px-4 py-2 caret-transparent transition-colors md:border-b border-r duration-300 w-full whitespace-nowrap md:whitespace-normal ${
                  selectedFeature.title === feature.title
                    ? "bg-[#0D1425]/50 backdrop-blur-sm text-white"
                    : "text-slate hover:bg-blue-100 bg-white/30"
                }`}
                onClick={() => setSelectedFeature(feature)}
              >
                {feature.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-8">
        <h3 className="text-3xl font-bold mb-8 text-stone-400 caret-transparent">
          Ready to take your career to the next level?
        </h3>
        <a href="/sign-up" className="btn-secondary py-3 px-8 ">
          Sign Up Now
        </a>
      </div>
    </section>
  );
};

export default SkillHubFeaturesSection;
