import React from 'react';
import founderImage from '../assets/founder.jpg'; // Import the image of the founder

const FandC = () => {
  return (
    <div className="flex justify-center items-center h-full">
     
      {/* Founder Image */}
      <div className="flex flex-col items-center m-20 w-1/2">
        <img src={founderImage} className="rounded-full w-64 h-64 mb-4" alt="Founder" /> {/* Increased image size */}
        <p className="text-center font-semibold">Pratik Prashant Patil</p>
        <p className="text-center">Founder & CEO</p>
      </div>
      

      {/* Description Box */}
      <div className="bg-gray-200 rounded-lg p-10 mr-20 w-1/2">
        <h2 className="text-xl font-bold mb-4">FOUNDER AND CEO</h2>
        <p>
          Pratik Prashant Patil born on 3rd October 2002 has completed his schooling from SAMBHAJINAGAR & SHIRPUR. The vision of the founder is to innovate new ideas and provide the best possible service to customers. In 2021 Joined NMIMS for higher education currently pursuing an integrated course PHARMA TECH [ B. PHARM + MBA].
        </p>
        <p className="mt-4">LEARN – ASPIRE – INSPIRE ‘’by Pratik Prashant Patil’’</p>
      </div>
    </div>
  );
};

export default FandC;
