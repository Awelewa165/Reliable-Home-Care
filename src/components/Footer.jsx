import React from "react";
import newlogo from "../Assests/logoNEW.png";

const Footer = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black">
        <div>
          <img className="h-40 w-auto" src={newlogo} alt="/" />
          <p className="py-4">
            We provide personal care and a range <br></br> of support services
            for people. living in <br></br>their own home.
          </p>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6 ">
          <div>
            <h6 className="font-medium text-gray-900 " href="/">
              <a href="/"> Home</a>
            </h6>
            <ul>
              <li className="py-2 text-sm">
                <a href="/aboutPage"> About us</a>
              </li>
              <li className="py-2 text-sm">
                <a href="/services"> Our Services</a>
              </li>
              <li className="py-2 text-sm">
                <a href="/contactUs"> Contact Us</a>
              </li>
              <li className="py-2 text-sm">
                {" "}
                <a href="/referralForm"> Referre Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-900">
              {" "}
              <a href="/aboutPage"> About us</a>
            </h6>
            <ul>
              <li className="py-2 text-sm">
                {" "}
                <a href="/aboutPage">Who we are</a>
              </li>
              <li className="py-2 text-sm">
                {" "}
                <a href="/aboutPage"> Why we do it</a>
              </li>
              <li className="py-2 text-sm">
                {" "}
                <a href="/aboutPage">Why choose us</a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-900">
              {" "}
              <a href="/employementPage">Employement</a>
            </h6>
            <ul>
              <li className="py-2 text-sm">
                {" "}
                <a href="/employementPage">Job Responsibilities</a>
              </li>
              <li className="py-2 text-sm">
                {" "}
                <a href="/employementPage"> Relevant Education</a>
              </li>
              <li className="py-2 text-sm">
                {" "}
                <a href="/employementPage">Job Requirements</a>
              </li>
              <li className="py-2 text-sm">
                {" "}
                <a href="/employementPage"> Application Form</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
