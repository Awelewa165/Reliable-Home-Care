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
  );
};
export default Address;
