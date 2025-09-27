import React from "react";
import CountUp from "react-countup";
import { FaBuilding } from "react-icons/fa";

const FeatureStateSection = () => {
  return (
    // <div className="bg-white rounded-2xl shadow-md  hover:shadow-xl transform hover:-translate-y-2 transition duration-300">
    <div>
    
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 text-center mb-16">
        <div>
          <h4 className="text-4xl font-bold text-logotype">
            <CountUp end={10000} duration={3} separator="," />+
          </h4>
          <p className="text-gray-600 mt-2">Active Businesses</p>
        </div>
        {/* <div className="flex flex-col items-center">
          <FaBuilding className="text-logotype text-5xl mb-3" />
          <h4 className="text-4xl font-bold text-logotype">10K+</h4>
          <p className="text-gray-600 mt-2">Active Businesses</p>
        </div> */}

        <div>
          <h4 className="text-4xl font-bold text-logotype">
            <CountUp end={1000} duration={3} separator="," />+
          </h4>

          <p className="text-gray-600 mt-2">Transactions Managed</p>
        </div>
        <div>
          <h4 className="text-4xl font-bold text-logotype">
            <CountUp end={99} duration={3} separator="," />%
          </h4>
          <p className="text-gray-600 mt-2">Uptime & Reliability</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureStateSection;
