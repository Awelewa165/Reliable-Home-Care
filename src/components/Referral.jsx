import React from "react";
import ReferreUs from "../components/ReferreUsSection";

const ReferralSection = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-3 row-gap-3 lg:grid-cols-3">
        <ul className="space-y-3 text-lg md:text-normal sm:text-normal leading-8 text-gray-600">
          <li className="flex items-start">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-[#c18b2e]"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            Are you looking for great and quality care for yourself or your
            loved ones?
          </li>
          <li className="flex items-start ">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-[#c18b2e]"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            Do you have elderly parents who need 24/7 care at home?
          </li>
        </ul>
        <ul className="space-y-3 text-lg md:text-normal sm:text-normal leading-8 text-gray-600">
          <li className="flex items-start">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-[#c18b2e]"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            Do you need short term respite care for your loved ones?
          </li>

          <li className="flex items-start">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-[#c18b2e]"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            Do you have loved ones who need 24/7 care at home or in independent
            or assisted living facilities?"
          </li>
        </ul>
        <ul className="space-y-3 text-lg md:text-normal sm:text-normal leading-8 text-gray-600">
          <li className="flex items-start ">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-[#c18b2e]"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            Do you have loved ones who you need help caring for?
          </li>
          <li className="flex items-start">
            <span className="mr-1">
              <svg
                className="w-5 h-5 mt-px text-[#c18b2e]"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </span>
            Do you have loved ones who need companionship for even few hours
            every day?
          </li>
        </ul>
      </div>
      <h5 className="mb-8 text-4xl font-extrabold leading-none md:pl-2 mt-10 text-center tracking-tight text-gray-900 sm:text-5xl">
        Look no further
      </h5>
      <p className="mt-6 text-lg md:text-normal sm:text-normal leading-8 text-gray-600">
        Reliable Homecare LLC is your trusted solution for unparalleled care.
        We're dedicated to meeting your needs and ensuring you receive the care
        you truly deserve. Count on our unwavering reliability as we prioritize
        your well-being. Simply leave us a message or conveniently send us a
        referral through the provided link below. Anticipate a prompt response
        from our team—we're here to make a positive difference in your care
        experience.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a
          href="/home"
          onClick={ReferreUs}
          className="text-sm font-semibold text-[#c18b2e]"
        >
          Submit referral <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
};
export default ReferralSection;
