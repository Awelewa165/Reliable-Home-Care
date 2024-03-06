import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import Map from "../Assests/map.jpg";
const Address = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid grid-cols-2 gap-4 place-content-center space-x-8 m-10">
        <div className="">
          <img src={Map} alt="map" className="" />
          {/* <div className="mt-6 lg:max-w-sm">
            <p className="text-lg text-gray-600 ">
              Our commitment to service knows no time constraints, ensuring
              support whenever you require it. We operate 24/7 to cater to your
              needs.
            </p>
          </div> */}
        </div>
        <div className="">
          <p className="text-4xl font-bold tracking-wide text-gray-900 mb-3">
            Contacts
          </p>

          <p className="mr-1 text-lg text-gray-600 ">
            Address: 3890 Castle Hill drive, Brownsburg, IN, 46112.
          </p>

          <br />

          <p className="mr-1 text-lg text-gray-600 ">Phone: +1(317) 998-2389</p>

          <br />

          <p className="text-lg text-gray-600 ">
            Email: administrator@reliablehomecarellc.com
          </p>
        </div>
      </div>
    </div>

    // <div className="relative isolate overflow-hidden bg-black py-16 sm:py-24 lg:py-32">
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
    //       <div className="max-w-xl lg:max-w-lg ">
    //         <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
    //           Contact us
    //         </h2>
    //         <p className="mt-4 text-lg leading-8 text-gray-300">
    //           Our commitment to service knows no time constraints, ensuring
    //           support whenever you require it.We operate 24/7 to cater to your
    //           needs.
    //         </p>
    //       </div>
    //       <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:pt-2">
    //         <div className="flex flex-col items-start">
    //           <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
    //             <CalendarDaysIcon
    //               className="h-6 w-6 text-white"
    //               aria-hidden="true"
    //             />
    //           </div>
    //           <dt className="mt-4 font-semibold text-white">Address</dt>
    //           <dd className="mt-2 leading-7 text-gray-400">
    //             3890 Castle Hill drive, Brownsburg, IN, 46112
    //           </dd>
    //         </div>
    //         <div className="flex flex-col items-start">
    //           <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
    //             <HandRaisedIcon
    //               className="h-6 w-6 text-white"
    //               aria-hidden="true"
    //             />
    //           </div>
    //           <dt className="mt-4 font-semibold text-white">Phone Number</dt>
    //           <dd className="mt-2 leading-7 text-gray-400">+1(317) 998-2389</dd>
    //         </div>
    //         <div className="flex flex-col items-start">
    //           <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
    //             <HandRaisedIcon
    //               className="h-6 w-6 text-white"
    //               aria-hidden="true"
    //             />
    //           </div>
    //           <dt className="mt-4 font-semibold text-white">Email</dt>
    //           <dd className="mt-2 leading-7 text-gray-400">
    //             administrator@reliablehomecarellc.com
    //           </dd>
    //         </div>
    //       </dl>
    //     </div>
    //   </div>
    //   <div
    //     className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
    //     aria-hidden="true"
    //   ></div>
    // </div>
  );
};
export default Address;
