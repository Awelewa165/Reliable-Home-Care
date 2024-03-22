import React from "react";

const ReferreUs = () => {
  const submitForm = (e) => {
    e.preventDefault();
    const formEle = e.target;
    const formData = new FormData(formEle);

    fetch(
      "https://script.google.com/macros/s/AKfycbyWtvbmQn7Sj2uyW7wp_uhdNFYRFQhdPNBQX4KiHbfYKulQHD_Oyvue9bP97pXH0__kZw/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Form submitted successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while submitting the form.");
      });
  };
  return (
    <div className="min-h-screen bg-[#F6F6F6] mt-[50px] py-6 flex flex-col justify-center sm:py-12">
      <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
          Refer Us
        </h1>{" "}
        <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
          If you've benefited from our extensive range of services, refer us to
          your friends and family, and let them discover the dedicated support
          we offer in daily living assistance, personal care, and beyond. Share
          the gift of compassionate and comprehensive home care by recommending
          Reliable Homecare today.
        </p>
      </div>
      <form
        className="relative py-3 mt-8 sm:max-w-xl sm:mx-auto"
        onSubmit={submitForm}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D24A1] to-[#04A7EB] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Submit your referrals</h1>
              <p className="mt-2 text-[#2D24A1]">
                {" "}
                We appreciate your referrals. Please fill out our form to
                submit.
              </p>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="Fullname"
                    name="Fullname"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Full Name"
                  />
                  <label
                    htmlFor="Fullname"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Full Name
                  </label>
                </div>
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="Emailaddress"
                    name="Emailaddress"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Full Name"
                  />
                  <label
                    for="Emailaddress"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="Contactinformation"
                    name="Contactinformation"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Contact address/Phone Number"
                  />
                  <label
                    for="Contactinformation"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Contact address/Phone Number
                  </label>
                </div>
                <div class="relative">
                  <button
                    class="bg-[#2D24A1] text-white rounded-md px-2 py-1"
                    type="Submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReferreUs;
