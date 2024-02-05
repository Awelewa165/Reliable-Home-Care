import React from "react";
import Footer from "../Footer";
import HeroService from "../HeroService";
import Navbar from "../Navbar";
import ReferreUs from "../ReferreUsSection";

const ReferralForm = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-black"></div>
      <ReferreUs />
      <Footer />
    </div>
  );
};

export default ReferralForm;
