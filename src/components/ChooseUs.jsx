import { useState } from "react";
import Heroimage from "../Assests/Heroimage.jpg";
import Heroimage2 from "../Assests/care2.jpg";
import Heroimage3 from "../Assests/cash3.jpg";
import Heroimage4 from "../Assests/Grid2.jpeg";

const product = {
  title: "Why Choose Us",

  images: [
    {
      src: [Heroimage],
      alt: "",
    },
    {
      src: [Heroimage3],
      alt: "",
    },
    {
      src: [Heroimage3],
      alt: "",
    },
    {
      src: [Heroimage2],
      alt: "",
    },
  ],

  description:
    "Even though there are numerous homecare agencies out there, we pride ourselves on providing the best homecare experience that you and your loved ones would wish for. We are compassionate about providing personal care assistance while ensuring you and your loved ones' safety, comfort, and improving the overall quality of life in the comfort of your home. At Reliable Homecare LLC, we believe in our elderly clients with dementia and Alzheimer’s staying in the comfort of their home while enjoying quality care from us rather than in a locked memory care unit. We provide round-the-clock, 24/7, and hourly homecare services that you and your loved ones might need. No long-term contracts are required, but you will be amazed at the care you receive at Reliable Homecare LLC. We provide individualized, one-on-one service to you and your loved ones.",
  highlights: [
    "Indianapolis northside, westside, southside, and eastside",
    "Brownsburg",
    "Pittsboro",
    "Plainfield",
    "Camby",
    "Carmel",
    "Fishers",
    "Noblesville",
    "Marion county",
    "Hendericks county",
    "Hamilton county",
    "Hancock county",
    "Johnson county",
    "Boone County",
  ],
  details:
    "Our goal is to make a positive difference in the care that you and your loved ones will receive, as we are truly RELIABLE for all your homecare needs. ",
};

const ChooseUS = () => {
  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[1].src}
                alt={product.images[1].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={product.images[2].src}
                alt={product.images[2].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={product.images[3].src}
              alt={product.images[3].alt}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="">
            <h1 className="text-2xl font-bold tracking-tight text-[#c18b2e] sm:text-3xl">
              {product.title}
            </h1>
          </div>

          {/* Options */}

          <div className="py-10 lg:col-start-1 lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <div className="space-y-6">
                <p className="text-lg md:text-normal sm:text-normal leading-8 text-gray-600">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-[#c18b2e]">
                Serviced Areas
              </h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-lg">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-600">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseUS;
