import React from "react";
import ReferreUs from "../ReferreUsSection";
import Address from "../Address";
import WelcomeStatement from "../Welcome";
import Footer from "../Footer";
import WhyChooseUs from "../WhyChooseUs";
import Navbar from "../Navbar";
import NewHero from "../Hero";
import Ourservices from "../Ourservices";
import JoinOurTeam from "../JoinOurTeam";
import ServicedAreas from "../ServicedAreas";

function Home() {
  return (
    <>
      <Navbar />
      <NewHero />
      <WelcomeStatement />
      <WhyChooseUs />
      <Ourservices />
      <JoinOurTeam />
      <ServicedAreas />
      <ReferreUs />
      <Address />
      <Footer />{" "}
    </>
  );
}

export default Home;
