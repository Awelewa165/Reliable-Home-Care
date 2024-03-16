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
const HeroService = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to Reliable Home Care, where compassionate home care meets
            exceptional service. We are committed to providing personalized care
            that brings comfort, companionship, and peace of mind to you or your
            loved ones right in the warmth of home.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              We take pride in providing care for our clients.
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Our values form the heart of our approach. Compassion fuels our
              every action, ensuring that every interaction is infused with
              empathy and understanding. We uphold the highest standards of
              quality, constantly striving for excellence in all our
              services.Our team of caregivers, ensures that every individual
              receives the highest standard of care. From creating personalized
              care plans to fostering a warm and nurturing environment, we go
              above and beyond to enhance the quality of life for our clients.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-[#2D24A1]">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    className="h-6 w-5 flex-none text-[#2D24A1]"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroService;
