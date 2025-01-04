import { useState } from 'react';

export const Testimonial = () => {
  const reviews = [
    {
      name: 'Farhar Rio',
      role: 'Happy Customer',
      stars: 5,
      text: "I've been coming to this gym for 3 years now and I've never been in better shape. The trainers are amazing and they've always pushed me to be my best."
    },
    {
      name: 'Jane Doe',
      role: 'Satisfied Member',
      stars: 4,
      text: "This gym has helped me improve my fitness level tremendously. The classes are top-notch and the community is so welcoming!"
    },
    {
      name: 'John Smith',
      role: 'Loyal Client',
      stars: 5,
      text: "I love how personalized the training is. The trainers really pay attention to your goals and help you reach them. Highly recommend!"
    },
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const goToNextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const goToPreviousReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="testimonial" className="flex flex-col lg:flex-row justify-center text-gray-100 py-8 lg:py-16 px-4 md:px-8 lg:px-36 gap-8 lg:gap-4">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">
          What Our Happy Clients<br className="hidden lg:block" />Say About Us
        </h2>
        <p className="text-sm">
          I've been a member of Fitness within for about 6 months
          <br className="hidden lg:block" /> now and I absolutely love it! The trainers are so motivating
          <br className="hidden lg:block" /> and they really help to reach fitness goals.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
        <div className="flex items-center text-sm text-right">
            <span className="text-yellow-500 text-2xl">&#9733;</span>
            <span className="">4.9 (450 Reviews)</span>
          </div>
          <div className="relative w-64 sm:w-20 h-12">
            {[
              { text: 'A', color: 'pink' },
              { text: 'L', color: 'blue' },
              { text: 'R', color: 'green' },
              { text: 'S', color: 'red' },
              { text: 'N', color: 'purple' }
            ].map((item, index) => (
              <img
                key={index}
                src={`https://placehold.co/600x600/${item.color}/white?text=${item.text}`}
                alt={`profile${index + 1}`}
                className={`absolute w-12 h-12 rounded-full left-${index * 8} z-${index * 10}`}
                style={{ left: `${index * 32}px` }}
              />
            ))}
          </div>
          
        </div>
      </div>

      <div className="relative w-full lg:w-auto px-4 lg:px-0">
        <div className="bg-brownCustom rounded-2xl p-4 lg:p-6 max-w-md mx-auto">
          <button
            className="text-xl font-bold text-brownCustom bg-gray-400 w-8 h-8 rounded-full flex justify-center items-center absolute left-0 lg:left-[-20px] top-1/2 -translate-y-1/2 hover:text-white hover:bg-gray-300"
            onClick={goToPreviousReview}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
          </button>

          <div className="w-full lg:w-80">
            <div className="flex mb-4">
              <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                {reviews[currentReviewIndex].name[0]}
              </div>
              <div className="ml-4">
                <p className="text-lg font-semibold">{reviews[currentReviewIndex].name}</p>
                <p className="text-sm">{reviews[currentReviewIndex].role}</p>
              </div>
            </div>

            <div className="flex mb-2">
              {[...Array(reviews[currentReviewIndex].stars)].map((_, idx) => (
                <span key={idx} className="text-yellow-500">&#9733;</span>
              ))}
            </div>

            <div className="text-sm">{reviews[currentReviewIndex].text}</div>
          </div>

          <button
            className="text-xl font-bold text-brownCustom bg-gray-400 w-8 h-8 rounded-full flex justify-center items-center absolute right-0 lg:right-[-20px] top-1/2 -translate-y-1/2 hover:text-white hover:bg-gray-300"
            onClick={goToNextReview}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};