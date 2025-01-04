export const AboutUs = () => {
  return (
    <div id="aboutus">
    <div className="text-gray-100 flex justify-center px-36 py-10 gap-12">
      <div>
      <img 
          src="/image1.webp" 
          alt="Hubspot Logo" 
          className="w-96 h-auto object-contain rounded-xl"
        />
      </div>
      <div className="w-1/3">
        <p className="text-3xl font-bold">
          Get Ready To Reach <br /> Your Fitness Goals
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
  )
}