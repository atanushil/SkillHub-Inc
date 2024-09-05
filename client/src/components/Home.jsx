import React, { useRef, useEffect, useState } from "react";
import { AboutUs, ContactUs, FeaturesSection, Footer, HeroSection, HowItWorks, NavBar, Pricing } from "../utils";
import { NavigationLinks } from "../constants";

const Home = () => {
  // Initialize the activeSectionId to "hero-section"
  const [activeSectionId, setActiveSectionId] = useState("hero-section");

  const sectionRefs = NavigationLinks.reduce((refs, link) => {
    const id = Object.values(link)[0];
    refs[id] = useRef(null);
    return refs;
  }, {});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSectionId(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [sectionRefs]);

  return (
    <div>
      <div className="sticky top-0 z-10 shadow-md shadow-Purple bg-slate/30 backdrop-blur-sm">
        <NavBar activeSectionId={activeSectionId} />
      </div>
      <div className="z-0 bg-slate/20" ref={sectionRefs['hero-section']} id="hero-section">
        <HeroSection />
      </div>
      <div className="z-0 bg-stone-600/20" ref={sectionRefs['features-section']} id="features-section">
        <FeaturesSection />
      </div>
      <div className="z-0 bg-slate/10" ref={sectionRefs['work-section']} id="work-section">
        <HowItWorks />
      </div>
      <div className="z-0" ref={sectionRefs['pricing-section']} id="pricing-section">
        <Pricing />
      </div>
      <div className="z-0 bg-slate/20" ref={sectionRefs['about-section']} id="about-section">
        <AboutUs />
      </div>
      <div className="z-0 bg-slate/30" ref={sectionRefs['contact-section']} id="contact-section">
        <ContactUs />
      </div>
      <div className="bg-gradient-to-r from-gray-900 via-gray-800" ref={sectionRefs['footer-section']} id="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
