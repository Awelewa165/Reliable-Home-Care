import React from "react";
import TeamPic from "../Assests/Image3.jpeg";

const JoinOurTeam = () => {
  return (
    <div className="relative bg-[#F6F6F6] flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-[#F6F6F6] transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={TeamPic}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-8 sm:leading-none text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Join Our Team
          </h2>
          <p className="pr-5 mb-5 md:text-lg mt-4 text-xl text-gray-500">
            Join our compassionate team at Reliable Homecareand make a
            meaningful impact in the lives of those in need. As a vital part of
            our dedicated home care services, you'll be providing essential
            support, including daily living assistance, personal care, and
            companionship. Enrich lives by joining us in delivering tailored
            care that encompasses everything from meal preparation to crafting
            moments of joy and connection.
          </p>
          <div className="flex items-center">
            <a
              href="/employementPage"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#2D24A1] hover:bg-[#2D24A1] focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>
            <a
              href="/employementPage"
              aria-label=""
              className="inline-flex items-center font-semibold text-[#2D24A1] transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;