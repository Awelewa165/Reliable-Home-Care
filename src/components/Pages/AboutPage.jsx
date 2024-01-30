import React from "react";
import Logo from "../../Assests/logo.png";
import AboutUsSection from "../AboutSection";
import Footer from "../Footer";
import Navbar from "../Navbar";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <img src={Logo} alt="" className="w-full h-[900px]" />
      <AboutUsSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
