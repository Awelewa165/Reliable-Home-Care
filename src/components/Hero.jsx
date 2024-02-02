import React from "react";
import LandingPage from "../Assests/Landingpage.jpeg";
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className="text-[#c18b2e] ">
      <img src={LandingPage} alt="/" className="w-full" />
      <div className="max-w-[800px] mt-[150px] w-full mx-auto text-center flex flex-col justify-center ">
        <p className="md:text-6xl sm:text-3xl font-bold p-2">
          WELCOME TO RELIABLE HOME CARE
        </p>
        <p className="md:text-3xl sm:text-2xl text-1xl text-gray-500 font-semibold md:py-6">
          A GREAT PLACE TO RECIEVE CARE
        </p>
        <div className="flex justify-center items-center ">
          <p className="md:text-5xl sm:text-4xl text-xl text-black font-bold py-4">
            We are committed to your
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["health", "routine", "comfort"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="text-xl text-gray-500">
          {" "}
          Our values form the heart of our approach. Compassion fuels our every
          action, ensuring that every interaction is infused with empathy and
          understanding. We uphold the highest standards of quality, constantly
          striving for excellence in all our services.Our team of caregivers,
          ensures that every individual receives the highest standard of care.
          From creating personalized care plans to fostering a warm and
          nurturing environment, we go above and beyond to enhance the quality
          of life for our clients.
        </p>
      </div>
    </div>
  );
};

export default Hero;
