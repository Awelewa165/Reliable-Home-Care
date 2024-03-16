import React from "react";
import ContactForm from "../contactform";
import Footer from "../Footer";
import Navbar from "../Navbar";

function ContactUs() {
  return (
    <div>
      <Navbar />
      <ContactForm />
      {/* <Address /> */}
      <Footer />
    </div>
  );
}

export default ContactUs;
