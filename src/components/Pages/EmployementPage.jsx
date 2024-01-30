import React from "react";
import Employement from "../Employement";
import Form from "../EmployementForm";
import Footer from "../Footer";
import Navbar from "../Navbar";

const EmployementPage = () => {
  return (
    <div>
      <Navbar />
      <Employement />
      <Form />
      <Footer />
    </div>
  );
};

export default EmployementPage;
