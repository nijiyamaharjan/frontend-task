import { LuDumbbell } from "react-icons/lu";
import { TbYoga } from "react-icons/tb";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";

export const Programs = () => {
  const programData = [
    {
      icon: <LuDumbbell />,
      title: "Strength Training",
      description:
        "Our trainers will design progressive workout plans that achieve proper strength gains.",
    },
    {
      icon: <TbYoga />,
      title: "Basic Yoga",
      description:
        "This program combines yoga with cardio & strength training to help lose weight & fitness.",
    },
    {
      icon: <GiWeightLiftingUp />,
      title: "Body Building",
      description:
        "For those looking to increase strength and build lean muscle, our strength & muscle program is ideal.",
    },
    {
      icon: <FaRunning />,
      title: "Weight Loss",
      description:
        "Our weight loss programs are designed to help you make sustainable lifestyle changes.",
    },
  ];

  return (
    <div id="programs" className="text-gray-100 flex flex-col px-36 py-12">
      <div className="flex justify-between">
        <p className="w-1/2 font-bold text-2xl">
          The Best Programs We
          <br />
          Offer For You
        </p>
        <p className="w-1/2 text-sm">
          We offer a wide range of comprehensive fitness programs designed to
          cater to individuals of all fitness levels. Our aim is to help you
          achieve specific goals & maximize results.
        </p>
      </div>
      <div className="flex gap-4 pt-5">
        {programData.map((program, index) => (
          <Card
            key={index}
            icon={program.icon} // Pass the icon property here
            title={program.title}
            description={program.description}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ icon, title, description }) => {
  return (
    <div className="rounded-lg bg-brownCustom w-1/4 p-4 text-gray-100 hover:bg-orangeCustom">
      <p className="text-5xl mb-2">{icon}</p>
      <p className="font-bold text-lg">{title}</p>
      <p className="text-sm mt-2">{description}</p>
      <p className="mt-4 cursor-pointer">Learn More →</p>
    </div>
  );
};
