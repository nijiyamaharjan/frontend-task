import "font-awesome/css/font-awesome.min.css";
import { useState } from "react";

export const Plans = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="text-gray-100 py-8 px-4">
      <p className="font-bold text-3xl text-center">Choose The Best Plan</p>
      <p className="text-center mt-2">
        Choose a plan that's right for your growing team. Simple pricing & no hidden charges.
      </p>
      <div className="flex justify-center mt-6">
        <div className="flex border-2 border-redCustom rounded-full">
          <button
            className={`${
              isMonthly ? "bg-redCustom text-white" : "bg-transparent"
            } px-6 py-2 rounded-full`}
            onClick={() => setIsMonthly(true)}
          >
            Monthly
          </button>
          <button
            className={`${
              !isMonthly ? "bg-redCustom text-white" : "bg-transparent"
            } px-6 py-2 rounded-full`}
            onClick={() => setIsMonthly(false)}
          >
            Annual
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <div className="w-64 p-6 bg-brownCustom rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-orangeCustom">
          <p className="font-semibold text-lg">DISCOVER</p>
          <p className="text-4xl font-bold mt-4">
            {isMonthly ? "$99" : "$199"}
            <span className="text-lg font-medium">/{isMonthly ? "Per Month" : "Per Year"}</span>
          </p>
          <ul className="text-sm mt-4 space-y-2 text-left px-6">
            <li>
              <i className="fa fa-check mr-2"></i> 5 classes per month
            </li>
            <li>
              <i className="fa fa-check mr-2"></i> 4 group class monthly
            </li>
            <li className="text-gray-300">
              <i className="fa fa-check text-gray-300 mr-2"></i> Online class access
            </li>
            <li className="text-gray-300">
              <i className="fa fa-check text-gray-300 mr-2"></i> E-book fitness guide
            </li>
          </ul>
          <button className="mt-6 border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-orangeCustom transition-colors">
            Choose Plan
          </button>
        </div>
        <div className="w-64 p-6 bg-brownCustom rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-orangeCustom">
          <p className="font-semibold text-lg">ENTERPRISE</p>
          <p className="text-4xl font-bold mt-4">
            {isMonthly ? "$299" : "$399"}
            <span className="text-lg font-medium">/{isMonthly ? "Per Month" : "Per Year"}</span>
          </p>
          <ul className="text-sm mt-4 space-y-2 text-left px-6">
            <li>
              <i className="fa fa-check mr-2"></i> 10 classes per month
            </li>
            <li>
              <i className="fa fa-check mr-2"></i> 8 group class monthly
            </li>
            <li>
              <i className="fa fa-check mr-2"></i> Online class access
            </li>
            <li>
              <i className="fa fa-check mr-2"></i> E-book fitness guide
            </li>
            <li>
              <i className="fa fa-check mr-2"></i> 7 Extra fitness training
            </li>
          </ul>
          <button className="mt-6 border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-orangeCustom transition-colors">
            Choose Plan
          </button>
        </div>
        <div className="w-64 p-6 bg-brownCustom rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-orangeCustom">
          <p className="font-semibold text-lg">PROFESSIONAL</p>
          <p className="text-4xl font-bold mt-4">
            {isMonthly ? "$199" : "$299"}
            <span className="text-lg font-medium">/{isMonthly ? "Per Month" : "Per Year"}</span>
          </p>
          <ul className="text-sm mt-4 space-y-2 text-left px-6">
            <li>
              <i className="fa fa-check mr-2"></i> 7 classes per month
            </li>
            <li>
              <i className="fa fa-check mr-2"></i> 6 group class monthly
            </li>
            <li>
              <i className="fa fa-check mr-2"></i> Online class access
            </li>
            <li className="text-gray-300">
              <i className="fa fa-check text-gray-300 mr-2"></i> E-book fitness guide
            </li>
          </ul>
          <button className="mt-6 border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-orangeCustom transition-colors">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};
