import React from "react";
import Heroimage from "../Assests/LandPageImg.jpg";
import { ReactTyped } from "react-typed";

const NewHero = () => {
  return (
    <div class="pt-24 bg-white">
      <div class="px-12 mx-auto max-w-7xl">
        <div class="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 class="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-800 md:text-6xl md:tracking-tight">
            <span>Expert</span>{" "}
            <span class="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-[#2D24A1] to-[#04A7EB] lg:inline">
              care in the comfort of home.
            </span>{" "}
            <span>
              We are committed to your{" "}
              <ReactTyped
                className="text-[#2D24A1] md:pl-4 pl-2"
                strings={["health", "routine", "comfort."]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </span>
          </h1>
          <p class="px-0 mb-8 text-lg text-gray-500 md:text-xl lg:px-24">
            Our home care service offers personalized assistance tailored to
            your needs, ensuring comfort and safety within the familiar
            surroundings of your own home. We are committed to excellence, we
            strive to enhance the overall well-being and happiness of every
            individual we serve.
          </p>
          <div class="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <a
              href="/contactUs"
              class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-[#2D24A1] rounded-2xl sm:w-auto sm:mb-0"
            >
              Get Started
              <svg
                class="w-4 h-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="/aboutPage"
              class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0"
            >
              Learn More
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div class="w-full mx-auto mt-20 text-center md:w-10/12">
          <div class="relative z-0 w-full mt-8">
            <div class="relative overflow-hidden shadow-2xl">
              <div class="flex items-center flex-none px-4 bg-[#04A7EB] rounded-b-none h-11 rounded-xl"></div>
              <img src={Heroimage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewHero;
