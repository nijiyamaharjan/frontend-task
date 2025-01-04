import { IoIosCheckmarkCircle } from "react-icons/io";

export const Membership = () => {
  return (
    <div id="membership" className="flex justify-between px-36 pt-12 gap-8 text-white">
      {/* Left Column (Text and List) */}
      <div className="w-1/2">
        <p className="font-bold text-3xl">
          Why Should People Choose <br /> Fitnesxia Services
        </p>
        <ul className="pt-4 space-y-6">
          <li>
            <p className="font-semibold text-lg mb-2 flex gap-2 items-center">
              <IoIosCheckmarkCircle className="text-orangeCustom font-2xl" />
              Personal Training
            </p>
            <p className="text-sm">
              Our personal trainers can help you create a personalized fitness plan and track your progress.
            </p>
          </li>
          <li>
            <p className="font-semibold text-lg mb-2 flex gap-2 items-center">
              <IoIosCheckmarkCircle className="text-orangeCustom font-2xl" />
              Expert Training
            </p>
            <p className="text-sm">
              Our gym is proud to offer a team of highly skilled and certified trainers to help you achieve your health & fitness goals.
            </p>
          </li>
          <li>
            <p className="font-semibold text-lg mb-2 flex gap-2 items-center">
              <IoIosCheckmarkCircle className="text-orangeCustom font-2xl" />
              Flexible Time
            </p>
            <p className="text-sm">
              There are many fitness classes that are offered during off-peak hours, such as early morning and late evening.
            </p>
          </li>
        </ul>
        <div className="bg-redCustom px-4 py-2 inline-block text-white rounded cursor-pointer mt-6">
          Join Today
        </div>
      </div>

      <div className="w-1/2 relative flex justify-center items-center">
      <div className="absolute w-80 h-80 bg-orange-500 rounded-full z-0 bottom-5"></div>

      {/* Image */}
      <img
        src="/woman.webp"
        alt="Woman"
        className="w-auto h-[450px] object-contain relative z-10"
      />
    </div>
    </div>
  );
};
