const people = [
  {
    name: "Are you looking for great and quality care for yourself or your loved ones?",
  },
  {
    name: "Do you have elderly parents who need 24/7 care at home?",
  },
  {
    name: "Do you have loved ones who need 24/7 care at home or in independent or assisted living facilities?",
  },
  {
    name: "Do you need short-term respite care for your loved ones?",
  },
  {
    name: "Do you have loved ones who need companionship for even a few hours every day?",
  },
  {
    name: "Do you have loved ones who you need help caring for?",
  },
];

const ReferralSection = () => {
  return (
    <div className="p-[200px]">
      <ul role="list" className="divide-y divide-gray-100">
        {people.map((person) => (
          <li key={person} className="flex justify-between gap-x-6 py-5">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                {person.name}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Look no further
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Reliable Homecare LLC is your trusted solution for unparalleled
            care. We're dedicated to meeting your needs and ensuring you receive
            the care you truly deserve. Count on our unwavering reliability as
            we prioritize your well-being. Simply leave us a message or
            conveniently send us a referral through the provided link below.
            Anticipate a prompt response from our team—we're here to make a
            positive difference in your care experience.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" className="text-sm font-semibold text-[#c18b2e]">
              Link to submit referral <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
export default ReferralSection;
