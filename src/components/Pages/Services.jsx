import React from "react";
import Footer from "../Footer";
import HeroService from "../HeroService";
import Navbar from "../Navbar";
import Heroimage from "../../Assests/LandImg2.jpg";

function Services() {
  return (
    <>
      <Navbar />
      <div>
        <img src={Heroimage} alt="" className="w-full" />
      </div>
      <HeroService />
      <Footer />
    </>
  );
}

export default Services;
