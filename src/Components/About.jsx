import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col mt-10 items-center justify-center h-70vh bg-gradient-to-br from-indigo-600 to-blue-400 text-white p-8">
      <h1 className="mb-8 text-3xl font-bold">ABOUT</h1>
      <div className="w-full md:w-2/3 lg:w-1/2 bg-white bg-opacity-20 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Info about organization</h2>
        <ul className="list-disc list-inside">
          <li>
            TFC37 [ Tricolor Futuristic Club 37] is a startup based in Maharashtra’s town Shirpur. It is simultaneously operated in Mumbai and Shirpur.
          </li>
          <li>
            On 7th JAN 2018, Pratik Prashant Patil started this company with a local product marketing and by the end term 2021 company completed 12 projects of different brands.
          </li>
          <li>
            During covid company decided to expand and as of TFC37 the company was turned into a private organization with the name TFC37 PVT limited.
          </li>
        </ul>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 bg-white bg-opacity-20 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Brand Developments</h2>
        <ul className="list-disc list-inside">
          <li>
            On 7th JAN 2023 a clothing brand was started by TFC37 named as VAG-LOBRS and is handled by OM SINGH, company has successfully reached 2000+ in end of year 2023.
          </li>
          <li>
            On 7th JAN 2024 HAR GHAR SHIKSHA [ also known as HGS] was started by Vaishali Prashant Patil, it’s an initiative to make learning easy and develop the learning skills and standards of rural area schools that will provide the students a good platform and better direction for future, first project is started with the MGNV SCHOOL [Village DARANE ROHANE – DIST DHULE].
          </li>
        </ul>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 bg-white bg-opacity-20 rounded-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Current Status</h2>
        <p>
          This organization currently has 10+ active associates working for it and growing day by day. The vision of the organization is to provide the best quality service to its customers. All the brands’ customers are satisfied with the service provided, currently TFC37 has worked with 16+ brands in the last 5 years.
        </p>
      </div>
    </div>
  );
};

export default About;
