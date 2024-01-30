import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Push to deploy.",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "SSL certificates.",
    description:
      "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",
    icon: LockClosedIcon,
  },
  {
    name: "Database backups.",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
    icon: ServerIcon,
  },
];

const AboutUsSection = () => {
  return (
    <div className="overflow-hidden bg-[#F6F6F6] text-white mb-[100px] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="lg:pr-8 lg:pt-4">
          <div className="text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-center sm:text-4xl">
              About Us
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Reliable Homecare was founded by a nurse practitioner who
              understood the importance of providing quality and adequate care
              to clients. Reliable Homecare LLC is dedicated to serving and
              improving our clients’ lives and health as we help them fulfil
              their full potential daily. Our mission is to ensure that our
              clients live up to their full potential in the comfort of their
              homes while ensuring that we maintain the highest level of care.
              Our caregivers are fully trained to provide the highest quality of
              care anytime, in and out of the client’s home. Our caregivers are
              provided with Dementia/ Alzheimer’s training, which enables us to
              provide care for elderly clients with the diagnosis while enabling
              them to live at home for as long as they want. We train our
              caregivers on skills like appropriate client and family
              communication skills, personal care, safety precaution and first
              aid, activities of daily living, Body Mechanics, and special needs
              of the elderly and entire lifespan. We provide care for children,
              young adults, and the elderly. We are reliable and you can trust
              us with your care and those of your loved ones. Give us the
              opportunity to care for you as we are RELIABLE homecare.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
