import React from "react";
import ReferreUs from "../ReferreUsSection";
import Address from "../Address";
import WelcomeStatement from "../Welcome";
import Footer from "../Footer";
import Hero from "../Hero";

import WhyChooseUs from "../WhyChooseUs";
import Navbar from "../Navbar";
import NewHero from "../NewHero";

import Ourservices from "../Ourservices";
import LandingPage from "../../Assests/Landingpage.jpeg";
import NewContactUs from "../NewContactUs";
import ServicedAreas from "../ServicedAreas";

function Home() {
  return (
    <>
      <Navbar />
      <NewHero />
      <WelcomeStatement />
      <WhyChooseUs />
      <Ourservices />
      <NewContactUs />
      <ServicedAreas />
      <ReferreUs />
      <Address />
      <Footer />{" "}
      {/* <div>
        <img src={LandingPage} alt="/" className="w-full" />
      </div> */}
      {/* <Hero /> */}
    </>
  );
}

export default Home;
