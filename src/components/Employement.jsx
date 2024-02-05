import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/20/solid";
const includedFeatures = [
  "Light housekeeping includes laundry, errands, and appointments.",
  "Meal planning, preparation, cleanup, monitoring and encouraging fluid intake, and monitoring dietary restrictions and allergies.",
  "Medication reminders, doctor’s appointment reminders, and taking vital signs as indicated on the care plan.",
  "Monitoring cognitive status and reporting changes to the supervisor immediately.",
  "Utilize universal precautions as necessary.",
  "Ability to read, write, and carry out directions.",
  "Must be at least 18 years old.",
  "A caregiver is expected to be able to kneel, move from sitting, bending, kneeling, or standing multiple times a day.",
  "The caregiver is expected to complete all required documentation in accordance with agency policies and procedures, professional standards, and the external requirements of all relevant regulatory, licensing, or accrediting bodies.",
  "The caregiver is expected to provide activities of daily living assistance to the client, which include but are not limited to feeding, dressing, bathing and grooming, toileting, transfer and repositioning, ambulation assistance, and exercises.",

  "The caregiver is expected to work closely with the client and family to guarantee great and quality care for the client.",
];
const Employement = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {" "}
        <p className="mt-[-70px] text-3xl font-bold text-center tracking-tight text-[#c18b2e] sm:text-4xl">
          CAREGIVER JOB OPPORTUNITIES
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Reliable Homecare LLC is looking for compassionate, caring, and
          reliable caregivers, home health aides, and CNAs who are available to
          provide great and quality care to our clients. If you want to be a
          part of a rewarding team, please fill out the application form, and we
          will contact you as soon as we can. We provide care in the following
          counties and areas: Indianapolis, northside, westside, southside,
          eastside, Brownsburg, Pittsboro, Avon, Plainfield, Camby, Carmel,
          Fishers, Noblesville, Marion County, Hendericks County, Hamilton
          County, Hancock County, Johnson County, and Boone County.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Reliable Homecare LLC does not discriminate in any way against any
          person based on race, age, color, creed, sex, national origin,
          ancestry, religion, handicap, disability, marital status, or sexual
          preference.
        </p>
        <div className="p-8 sm:p-10 lg:flex-auto">
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-normal font-semibold leading-6 text-[#c18b2e]">
              Job Responsibilites:
            </h4>
            <div className="h-px flex-auto bg-gray-100" />
          </div>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-normal leading-8 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-[#c18b2e]"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:pr-4">
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="">
              <span>
                <strong className="font-semibold text-gray-900">
                  PLEASE NOTE: Essential functions include all other duties and
                  responsibilities as assigned.
                </strong>{" "}
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  Requirements:
                </strong>{" "}
                : Background check, three references, physical examination, drug
                testing, TB testing, valid driver’s license, reliable
                transportation, and valid auto insurance.
              </span>
            </li>
            <li className="flex gap-x-3">
              <span>
                <strong className="font-semibold text-gray-900">
                  Relevant Education:
                </strong>{" "}
                High School Diploma/ GED. Experienced caregivers and CNAs are
                urged to apply. New CNA/HHA graduates are welcome to apply.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Employement;
