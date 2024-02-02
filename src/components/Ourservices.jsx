import React from "react";

import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
  "Daily living assistance",
  "Personal care",
  "Light housekeeping ",
  "Meal preparation",
  "Washing dishes ",
  "Dusting and vacuuming",
  "Laundry ",
  "Bed making",
  "Grooming and dressing",
  "Oral and personal hygiene",
  "Assistance with bathing and toileting ",
  "Medication reminder",
  "Transferring ",
  "Companionship",
  "Taking and recording temperature and daily weights",
  "Administering emergency first aid",
  "Helping to plan daily schedule. ",
  "Scheduling appointments as needed ",
  "Assist with crafts. ",
  "Reviewing daily activities ",
  "Birthday reminders",
  "Member resources",
];

const Ourservices = () => {
  return (
    <div className="px-4 mt-[100px] py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {" "}
            Our Services{" "}
          </span>
        </h2>
        <p className="mt-4 text-xl text-gray-500">
          We offer a range of specialized services designed to provide
          compassionate and personalized care for your loved ones. We provide
          you the best care possible at home, we bring the highest quality care
          for your home. Whatever your home healthcare needs may be,we can
          handle any home healthcare demands you may have. Our team will Ensure
          that your loved ones receive the assistance they require at the
          appropriate time.
        </p>
      </div>
      <div className="grid gap-8 row-gap-8 lg:grid-cols-3">
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 text-xl font-semibold text-[#c18b2e] leading-5">
            Personal Care Services
          </h6>
          <ul className="text-gray-500 font-medium mb-3 text-medium ">
            <li>Grooming and dressing</li>
            <li>Oral and personal hygiene </li>
            <li> Medication reminders</li>
            <li>Assistance with bathing and toileting</li>
          </ul>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold text-[#c18b2e] leading-5">
            Household Assistance
          </h6>
          <ul className="text-gray-500 font-medium mb-3 text-medium ">
            <li> Daily living assistance</li>
            <li> Light housekeeping </li>
            <li> Meal preparation </li>
            <li>Washing dishes </li>
            <li> Laundry and Bed making</li>
            <li> Dusting and vacuuming </li>
          </ul>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold text-[#c18b2e] leading-5">
            Companion Care
          </h6>
          <ul className="text-gray-500 font-medium mb-3 text-medium ">
            <li> Companionship</li>
            <li> Assistance with daily activities </li>
            <li> Help with planning daily schedules </li>
            <li>Scheduling appointments as needed </li>
            <li> Birthday reminders</li>
          </ul>
        </div>
      </div>
      <div className="grid gap-8 mt-[100px] row-gap-8 lg:grid-cols-3">
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold text-[#c18b2e] leading-5">
            Health Monitoring
          </h6>
          <ul className="text-gray-500 font-medium mb-3 text-medium ">
            <li>Taking and recording temperature</li>
            <li>Taking and recording daily weights </li>
            <li> Administering emergency first aid</li>
          </ul>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold text-[#c18b2e] leading-5">
            Craft and Leisure Assistance
          </h6>
          <ul className="text-gray-500 font-medium mb-3 text-medium ">
            <li> Assistance with crafts</li>
            <li> Engaging in leisure activities</li>
          </ul>
        </div>
        <div className="sm:text-center">
          <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
            <svg
              className="w-12 h-12 text-deep-purple-accent-400 sm:w-20 sm:h-20"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </div>
          <h6 className="mb-2 font-semibold text-[#c18b2e] leading-5">
            Personalized Care Coordination
          </h6>
          <ul className="text-gray-500 font-medium mb-3 text-medium ">
            <li> Tailored plans for individual needs</li>
            <li> Coordination of various services for comprehensive care. </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
