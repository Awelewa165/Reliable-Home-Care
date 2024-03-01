import React from "react";
// import AboutImage1 from "../Assests/AboutImage1.jpeg";
// import AboutImage2 from "../Assests/AboutImage3.jpeg";
// import AboutImage3 from "../Assests/LandImg.jpg";
// import AboutImage4 from "../Assests/AboutImage2.jpeg";

const AboutUsSection = () => {
  return (
    <div className="bg-white mt-[-50px]">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-[#2D24A1] tracking-tight sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 text-gray-500 text-lg leading-8">
            Reliable Homecare was founded by a nurse practitioner who understood
            the importance of providing quality and adequate care to clients.
            Reliable Homecare LLC is dedicated to serving and improving our
            clients’ lives and health as we help them fulfil their full
            potential daily. Our mission is to ensure that our clients live up
            to their full potential in the comfort of their homes while ensuring
            that we maintain the highest level of care. Our caregivers are fully
            trained to provide the highest quality of care anytime, in and out
            of the client’s home. Our caregivers are provided with Dementia/
            Alzheimer’s training, which enables us to provide care for elderly
            clients with the diagnosis while enabling them to live at home for
            as long as they want. We train our caregivers on skills like
            appropriate client and family communication skills, personal care,
            safety precaution and first aid, activities of daily living, Body
            Mechanics, and special needs of the elderly and entire lifespan. We
            provide care for children, young adults, and the elderly. We are
            reliable and you can trust us with your care and those of your loved
            ones. Give us the opportunity to care for you as we are RELIABLE
            homecare.
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-6">
          {/* <img
            src={AboutImage1}
            className="rounded-lg w-full h-[250px] bg-gray-100"
          /> */}
          {/* <img src={AboutImage2} className="rounded-lg h-[250px] bg-gray-100" />
          <img src={AboutImage3} className="rounded-lg h-[250px] bg-gray-100" />
          <img src={AboutImage4} className="rounded-lg h-[250px] bg-gray-100" /> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
