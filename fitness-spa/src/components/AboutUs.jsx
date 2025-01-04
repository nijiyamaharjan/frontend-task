export const AboutUs = () => {
  return (
    <div id="aboutus" className="text-gray-100 px-4 md:px-8 lg:px-36 py-10">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <div className="w-full lg:w-1/2">
          <img 
            src="/image1.webp" 
            alt="About Us"
            className="w-full max-w-md mx-auto rounded-xl"
          />
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-2xl lg:text-3xl font-bold">
            Get Ready To Reach <br className="hidden lg:block" /> Your Fitness Goals
          </p>
          <p className="text-sm pt-3">
            We are a gym that is committed to helping people reach their fitness goals. We offer a variety of fitness programs and services to fit your needs, whether you are an experienced athlete.
          </p>
          <p className="text-sm pt-2 pb-4">
            We believe that everyone should have access to the benefits of exercise make it happen.
          </p>
          <div className="bg-redCustom px-4 py-2 inline-block text-white rounded cursor-pointer">
            Free Trial Today
          </div>
        </div>
      </div>
    </div>
  );
};