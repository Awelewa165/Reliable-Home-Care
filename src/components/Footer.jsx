import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Logo from "../Assests/logo.png";
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
            <h6 className="font-medium text-gray-900"> Home</h6>
            <ul>
              <li className="py-2 text-sm" href="/aboutPage">
                {" "}
                About us
              </li>
              <li className="py-2 text-sm" href="/services">
                {" "}
                Our Services
              </li>
              <li className="py-2 text-sm"> Contact Us</li>
              <li className="py-2 text-sm"> Referre Us</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-900"> About us</h6>
            <ul>
              <li className="py-2 text-sm"> Who we are</li>
              <li className="py-2 text-sm"> Why we do it</li>
              <li className="py-2 text-sm"> Why choose us</li>
            </ul>
          </div>

          <div>
            <h6 className="font-medium text-gray-900"> Employement</h6>
            <ul>
              <li className="py-2 text-sm"> Job Responsibilities</li>
              <li className="py-2 text-sm"> Relevant Education</li>
              <li className="py-2 text-sm"> Job Requirements</li>
              <li className="py-2 text-sm"> Application Form</li>
            </ul>
          </div>

          {/* <div>
            <h6 className="font-medium text-gray-400"> Service area</h6>
            <ul>
              <li className="py-2 text-sm"> About</li>
              <li className="py-2 text-sm"> Blog</li>
              <li className="py-2 text-sm"> Jobs</li>
              <li className="py-2 text-sm"> Careers</li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
