import { FaPlayCircle } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <div id="home" className="text-gray-100 px-4 md:px-8 lg:px-36 pt-8 lg:pt-16">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="text-center lg:text-left">
          <p className="font-bold text-3xl lg:text-4xl lg:w-600 leading-tight">
            GET HEALTHY BODY WITH THE PERFECT EXERCISES
          </p>
          <div className="text-md py-4">
            We are always there to help you make a healthy body<br className="hidden md:block" /> and mind through the power of fitness.
          </div>
          <div className="flex items-center justify-center lg:justify-start py-2 gap-4">
            <div className="bg-redCustom px-6 py-2 rounded-xl cursor-pointer">Get Started</div>
            <div className="flex items-center gap-2 cursor-pointer">
              <FaPlayCircle className="text-3xl"/>
              <div>Watch Video</div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-0 my-4 lg:divide-x divide-gray-300">
            {[
              { count: "105+", text: "Expert Trainers" },
              { count: "970+", text: "Member Joined" },
              { count: "135+", text: "Fitness Programs" }
            ].map((item, index) => (
              <div key={index} className="px-4 first:pl-0">
                <p className="font-bold text-2xl">{item.count}</p>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <img 
            src="/fitness.png" 
            alt="Fitness" 
            className="w-full h-auto max-h-500 object-contain"
          />
        </div>
      </div>
    </div>
  );
};