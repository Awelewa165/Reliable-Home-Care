import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

const Address = () => {
  return (
    <div className="relative isolate overflow-hidden bg-black py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Contact us
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Our commitment to service knows no time constraints, ensuring
              support whenever you require it.We operate 24/7 to cater to your
              needs.
            </p>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">Address</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                3890 Castle Hill drive, Brownsburg, IN, 46112
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">Phone Number</dt>
              <dd className="mt-2 leading-7 text-gray-400">317-728-4256</dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-white">Email</dt>
              <dd className="mt-2 leading-7 text-gray-400">
                administrator@reliablehomecarellc.com
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      ></div>
    </div>
  );
};
export default Address;
