import React from "react";
import AboutUs from "../AboutUs";
import Footer from "../Footer";
import Hero from "../Hero";
import Joinourteam from "../Joinourteam";
import Knowus from "../KnowUs";
import Navbar from "../Navbar";
import Ourservices from "../Ourservices";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Knowus />
      <Joinourteam />
      <Ourservices />
      <Footer />
    </>
  );
}

export default Home;
