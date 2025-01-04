import { IoIosCheckmarkCircle } from "react-icons/io";

export const Membership = () => {
  const benefits = [
    {
      title: "Personal Training",
      description: "Our personal trainers can help you create a personalized fitness plan and track your progress."
    },
    {
      title: "Expert Training",
      description: "Our gym is proud to offer a team of highly skilled and certified trainers to help you achieve your health & fitness goals."
    },
    {
      title: "Flexible Time",
      description: "There are many fitness classes that are offered during off-peak hours, such as early morning and late evening."
    }
  ];

  return (
    <div id="membership" className="px-4 md:px-8 lg:px-36 pt-12 text-white">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="font-bold text-2xl lg:text-3xl">
            Why Should People Choose <br className="hidden lg:block" /> Fitnesxia Services
          </p>
          <ul className="pt-4 space-y-6">
            {benefits.map((benefit, index) => (
              <li key={index}>
                <p className="font-semibold text-lg mb-2 flex gap-2 items-center justify-center lg:justify-start">
                  <IoIosCheckmarkCircle className="text-orangeCustom text-xl" />
                  {benefit.title}
                </p>
                <p className="text-sm">{benefit.description}</p>
              </li>
            ))}
          </ul>
          <div className="bg-redCustom px-4 py-2 inline-block text-white rounded cursor-pointer mt-6">
            Join Today
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 relative flex justify-center items-center">
          <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-orange-500 rounded-full z-0 bottom-5"></div>
          <img
            src="/woman.webp"
            alt="Woman"
            className="w-auto h-[300px] md:h-[450px] object-contain relative z-10"
          />
        </div>
      </div>
    </div>
  );
};