import React from "react";
import LandingPage from "../Assests/Landingpage.jpeg";
import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <div className="text-[#c18b2e] ">
      <img src={LandingPage} alt="/" className="w-full" />
      <div className="max-w-[800px] mt-[150px] w-full mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#00df9a]md:text-6xl sm:text-3xl font-bold p-2">
          WELCOME TO RELIABLE HOME CARE
        </p>
        <h1 className="md:text-3xl sm:text-2xl text-1xl text-gray-500 font-semibold md:py-6">
          A GREAT PLACE TO RECIEVE CARE
        </h1>
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
        <p className="md:text-1xl text-xl font-normal text-gray-500">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Quisque placerat scelerisque tortor ornare ornare. Convallis
          felis vitae tortor augue. Velit nascetur proin massa in. Consequat
          faucibus porttitor enim et.
        </p>
      </div>
    </div>
  );
};

export default Hero;
