import { useState } from "react";
import { FaCheck } from 'react-icons/fa'; // Using react-icons instead of font-awesome for better compatibility

export const Plans = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const plans = [
    {
      name: "DISCOVER",
      monthlyPrice: 99,
      annualPrice: 199,
      features: [
        { text: "5 classes per month", included: true },
        { text: "4 group class monthly", included: true },
        { text: "Online class access", included: false },
        { text: "E-book fitness guide", included: false },
      ],
    },
    {
      name: "ENTERPRISE",
      monthlyPrice: 299,
      annualPrice: 399,
      features: [
        { text: "10 classes per month", included: true },
        { text: "8 group class monthly", included: true },
        { text: "Online class access", included: true },
        { text: "E-book fitness guide", included: true },
        { text: "7 Extra fitness training", included: true },
      ],
    },
    {
      name: "PROFESSIONAL",
      monthlyPrice: 199,
      annualPrice: 299,
      features: [
        { text: "7 classes per month", included: true },
        { text: "6 group class monthly", included: true },
        { text: "Online class access", included: true },
        { text: "E-book fitness guide", included: false },
      ],
    },
  ];

  return (
    <div className="text-gray-100 py-8 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto">
        <p className="font-bold text-2xl md:text-3xl">Choose The Best Plan</p>
        <p className="mt-2 text-sm md:text-base px-4">
          Choose a plan that's right for your growing team. Simple pricing & no hidden charges.
        </p>
      </div>
      <div className="flex justify-center mt-6">
        <div className="flex border-2 border-redCustom rounded-full">
          <button
            className={`${
              isMonthly ? "bg-redCustom text-white" : "bg-transparent"
            } px-4 md:px-6 py-2 rounded-full text-sm md:text-base transition-colors`}
            onClick={() => setIsMonthly(true)}
          >
            Monthly
          </button>
          <button
            className={`${
              !isMonthly ? "bg-redCustom text-white" : "bg-transparent"
            } px-4 md:px-6 py-2 rounded-full text-sm md:text-base transition-colors`}
            onClick={() => setIsMonthly(false)}
          >
            Annual
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="p-6 bg-brownCustom rounded-lg text-center transform transition-all duration-300 hover:scale-105 hover:bg-orangeCustom"
          >
            <p className="font-semibold text-lg">{plan.name}</p>
            <p className="text-3xl md:text-4xl font-bold mt-4">
              ${isMonthly ? plan.monthlyPrice : plan.annualPrice}
              <span className="text-base md:text-lg font-medium block md:inline">
                /{isMonthly ? "Per Month" : "Per Year"}
              </span>
            </p>
            
            <ul className="text-sm mt-4 space-y-2 text-left px-2 md:px-6">
              {plan.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className={`flex items-center gap-2 ${
                    !feature.included ? "text-gray-300" : ""
                  }`}
                >
                  <FaCheck className={`text-xs ${!feature.included ? "text-gray-300" : ""}`} />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            
            <button className="mt-6 border border-white text-white px-4 md:px-6 py-2 rounded-full hover:bg-white hover:text-orangeCustom transition-colors text-sm md:text-base w-full md:w-auto">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};