import { FaPlayCircle } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <div id="home" className="text-gray-100 px-36 pr-24 pt-16 flex items-center">
      <div>
        <p className="font-bold text-4xl w-600 leading-[48px]">
        GET HEALTHY BODY WITH THE PERFECT EXERCISES <span>Image</span>
        </p>
        <div className="text-md py-4">
          We are always there to help you make a healthy body<br /> and mind through the power of fitness.
        </div>
        <div className="flex items-center py-2">
          <div className="bg-redCustom px-6 py-2 rounded-xl mr-4">Get Started</div>
          <FaPlayCircle className="text-3xl mr-2"/>
          <div>Watch Video</div>
        </div>
        <div className="flex my-4 divide-x divide-gray-300">
          <div className="px-4 pl-0">
            <p className="font-bold text-2xl">105+</p>
            <p>Expert Trainers</p>
          </div>
          <div className="px-4">
            <p className="font-bold text-2xl">970+</p>
            <p>Member Joined</p>
          </div>
          <div className="px-4">
            <p className="font-bold text-2xl">135+</p>
            <p>Fitness Programs</p>
          </div>
        </div>
      </div>
      <div>
      <img 
          src="/fitness.png" 
          alt="Hubspot Logo" 
          className="w-auto h-500 object-contain"
        />
      </div>
    </div>
  )
}