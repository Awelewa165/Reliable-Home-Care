import React from "react";

const AboutUs = () => {
  return (
    <div className="w-ful bg-black mt-[200px] py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Submit Your Referrals
          </h1>
          <p className="">
            {" "}
            We appreciate your referrals. Please fill out our form to submit.
          </p>
        </div>
        <div className="lg:col-span-4 my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-full">
            <input
              className="p-3 flex w-full sm:col-span-3 rounded-md text-black"
              type="email"
              placeholder=" Enter Email"
            />
            <input
              className="p-3 flex w-full sm:col-span-3 rounded-md text-black"
              type="email"
              placeholder=" Enter Email"
            />
            <button className="bg-[#c18b2e] w-[400px] rounded-md font-medium ml-4 my-6 mx-auto px-6 py-3 text-black">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
