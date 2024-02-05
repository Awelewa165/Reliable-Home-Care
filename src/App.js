import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employement from "./components/Employement";
import AboutPage from "./components/Pages/AboutPage";
import ClientReferral from "./components/Pages/ClientReferral";
import ContactUs from "./components/Pages/ContactUs";
import EmployementPage from "./components/Pages/EmployementPage";
import Home from "./components/Pages/Home";
import ReferralForm from "./components/Pages/ReferralForm";
import Services from "./components/Pages/Services";
import WhyChooseUs from "./components/Pages/WhyChooseUs";
import ReferreUs from "./components/ReferreUsSection";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="aboutPage" element={<AboutPage />} />
          <Route path="employementPage" element={<EmployementPage />} />
          <Route path="whychooseUs" element={<WhyChooseUs />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="clientReferral" element={<ClientReferral />} />
          <Route path="referralForm " element={<ReferralForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
