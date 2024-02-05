import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";

const ContactForm = () => {
  return (
    <div class="flex justify-center items-center bg-white">
      <div class="container mx-auto my-4 px-4 lg:px-20">
        <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div class="">
            <h2 className="text-3xl font-bold tracking-tight text-[#c18b2e] sm:text-4xl">
              Contact Form
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              For inquiries or questions, please call us or send us a message
              using our online form below.
            </p>
          </div>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Phone*"
            />
          </div>
          <div class="my-4">
            <textarea
              placeholder="Message*"
              class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div class="my-2 w-1/2 lg:w-1/4">
            <button
              class="uppercase text-sm font-bold tracking-wide bg-[#c18b2e] text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </div>

        <div class="w-full lg:-mt-96 lg:w-2/6 px-8 py-12 ml-auto bg-[#F6F6F6] rounded-2xl">
          <div class="flex flex-col">
            <p className="mt-4 text-lg leading-8 text-gray-900">
              Our commitment to service knows no time constraints, ensuring
              support whenever you require it.We operate 24/7 to cater to your
              needs.
            </p>

            <div class="flex my-4 w-2/3 lg:w-1/2">
              <div class="flex flex-col">
                <i class="fas fa-map-marker-alt pt-2 pr-2" />
              </div>
              <div class="flex flex-col">
                <dt className="mt-4 font-semibold text-[#c18b2e]">Address</dt>
                <dd className="mt-2 leading-7 text-gray-900">
                  3890 Castle Hill drive, Brownsburg, IN, 46112
                </dd>
              </div>
            </div>

            <div class="flex my-4 w-2/3 lg:w-1/2">
              <div class="flex flex-col">
                <i class="fas fa-phone-alt pt-2 pr-2" />
              </div>
              <div class="flex flex-col">
                <dt className="mt-4 font-semibold text-[#c18b2e]">
                  Phone Number
                </dt>
                <dd className="mt-2 leading-7 text-gray-900">317-728-4256</dd>
              </div>
            </div>
            <div class="flex my-4 w-2/3 lg:w-1/2">
              <div class="flex flex-col">
                <i class="fas fa-phone-alt pt-2 pr-2" />
              </div>
              <div class="flex flex-col">
                <dt className="mt-4 font-semibold text-[#c18b2e]">Email</dt>
                <dd className="mt-2 leading-7 text-gray-900">
                  administrator@reliablehomecarellc.com
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
