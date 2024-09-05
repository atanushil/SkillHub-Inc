import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

const plans = [
  {
    name: "Free Tier",
    yearlyPrice: null,
    features: [
      "Basic profile creation",
      "Limited access to job matches",
      "Basic portfolio features",
      "Access to community forums",
    ],
    description: "Experience SkillHub’s basic functionalities.",
  },
  {
    name: "Professional Plan",
    price: "$49/month",
    yearlyPrice: "$588/year",
    features: [
      "All Free Tier features",
      "Advanced portfolio features",
      "Priority application processing",
      "Comprehensive analytics and insights",
      "Personalized job matching and recommendations",
      "Premium support and career advice",
    ],
    description: "Advanced tools for serious career growth.",
    trial: true,
  },
  {
    name: "Premium Plan",
    price: "$99/month",
    yearlyPrice: "$1,188/year",
    features: [
      "All Professional Plan features",
      "Access to exclusive job listings",
      "Enhanced networking tools",
      "Advanced portfolio features",
      "Global job market access",
      "Priority customer support and career coaching",
    ],
    description: "Top-tier features for maximum exposure.",
    trial: true,
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState("Free Tier");

  const handlePlanSelect = (planName) => {
    setSelectedPlan(planName);
  };

  const handleTrialClick = (planName) => {
    console.log(`Selected plan for trial: ${planName}`);
  };

  return (
    <section id="pricing-section" className="py-16 max-w-screen-xl mx-auto">
      <div className="px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold  text-gradient-heading">
          Our Pricing Plans
        </h2>
        <p className="mt-4 text-lg   text-gradient-sub-heading">
          Choose the plan that best fits your needs and start your journey with
          SkillHub.
        </p>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => handlePlanSelect(plan.name)}
              className={`group bg-white/30 p-6 rounded-lg 
                shadow-2xl transition-transform duration-300 hover:shadow-Purple
                 hover:scale-105 flex flex-col justify-between cursor-pointer ${
                selectedPlan === plan.name
                  ? "border-2 border-Purple text-white  shadow-Purple"
                  : ""
              }`}
              style={{ minHeight: "400px", minWidth: "300px" }}
            >
              <div className="text-center mb-4">
                <h3
                  className={`text-2xl font-semibold text-gray-200 caret-transparent ${
                    selectedPlan === plan.name ? "text-teal-400 " : null
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-2 text-xl font-bold text-gray-200 caret-transparent ${
                    selectedPlan === plan.name
                      ? "text-teal-300"
                      : "text-gray-400"
                  }`}
                >
                  {plan.price}
                </p>
                {plan.yearlyPrice && (
                  <p
                    className={`text-sm text-gray-300 caret-transparent ${
                      selectedPlan === plan.name
                        ? "text-teal-300"
                        : "text-gray-400"
                    }`}
                  >
                    or {plan.yearlyPrice}
                  </p>
                )}
              </div>
              <div className="space-y-4 flex-grow">
                <ul className="list-disc list-inside text-left text-gray-400">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex text-start gap-2 caret-transparent ${
                        selectedPlan === plan.name
                          ? "text-teal-300"
                          : "text-gray-400"
                      }`}
                    >
                      <FaRegCheckCircle
                        className={`text-gray-400 text-xl mt-[2px] ${
                          selectedPlan === plan.name
                            ? "text-teal-300"
                            : "text-gray-400"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <p
                  className={`mt-4  caret-transparent ${
                    selectedPlan === plan.name
                      ? "text-teal-300"
                      : "text-gray-400"
                  }`}
                >
                  {plan.description}
                </p>
              </div>
              {plan.trial ? (
                <button
                  onClick={() => handleTrialClick(plan.name)}
                  className={`mt-6 w-full py-2 rounded-lg font-semibold  ${
                    selectedPlan === plan.name ? "btn-secondary" : "btn-primary"
                  }`}
                >
                  14 Days Free Trial
                </button>
              ) : (
                <button
                  onClick={() => handleTrialClick(plan.name)}
                  className={`mt-6 w-full py-2 rounded-lg font-semibold  ${
                    selectedPlan === plan.name ? "btn-secondary" : "btn-primary"
                  }`}
                >
                  Selected
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
