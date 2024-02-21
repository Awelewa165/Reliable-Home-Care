import React from "react";

const ServicedAreas = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Serviced Areas
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Reliable Homecare is dedicated to providing quality care within a
            wide-reaching radius. Discover the comfort and support of our
            services, available in the following areas.
          </p>
        </div>
        <div className="grid mt-[100px] gap-10 row-gap-8 lg:grid-cols-4">
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
            <h6 className="mb-2 text-xl font-semibold text-[#2D24A1] leading-5">
              Indianapolis Metropolitan Area
            </h6>
            <ul className="text-gray-500 font-medium mb-3 text-medium ">
              <li>Avon</li>
              <li>Camby</li>
              <li>Plainfield</li>
              <li>Brownsburg</li>
              <li>Pittsboro</li>
              <li>Indianapolis Northside</li>
              <li>Indianapolis Westside</li>
              <li> Indianapolis Southside</li>
              <li>Indianapolis Eastside</li>
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
            <h6 className="mb-2 font-semibold text-[#2D24A1] leading-5">
              Hamilton County
            </h6>
            <ul className="text-gray-500 font-medium mb-3 text-medium ">
              <li> Carmel</li>
              <li> Fishers </li>
              <li> Noblesville</li>
              <li>Washing dishes </li>
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
            <h6 className="mb-2 font-semibold text-[#2D24A1] leading-5">
              Hendricks County
            </h6>
            <ul className="text-gray-500 font-medium mb-3 text-medium ">
              <li> Marion County (part of Indianapolis)</li>
              <li>Hendericks County </li>
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
            <h6 className="mb-2 font-semibold text-[#2D24A1] leading-5">
              Surrounding Counties
            </h6>
            <ul className="text-gray-500 font-medium mb-3 text-medium ">
              <li> Hancock County</li>
              <li>Johnson County </li>
              <li> Boone County </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServicedAreas;
