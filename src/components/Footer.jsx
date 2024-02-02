import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Logo from "../Assests/logo.png";
const Footer = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-black">
        <div>
          <img className="h-40 w-auto" src={Logo} alt="/" />
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet nam,
            illum neque cumque voluptatum in perspiciatis? Amet nam,Amet nam,.
          </p>
          {/* <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaDribbbleSquare size={30} />
            <FaGithubSquare size={30} />
          </div> */}
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6 ">
          <div>
            <h6 className="font-medium text-gray-900"> Home</h6>
            <ul>
              <li className="py-2 text-sm"> Our Team</li>
              <li className="py-2 text-sm"> Our Services</li>
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
