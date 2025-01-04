export const Companies = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 px-4 md:px-8 lg:px-36 text-gray-100 py-6">
      <div className="text-center md:text-left">
        <p className="text-2xl font-bold">970k+ More</p>
        <p>Trusted Companies Partner</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {["videoask", "hubspot", "mapbox"].map((company) => (
          <img 
            key={company}
            src={`/${company}.png`}
            alt={`${company} Logo`}
            className="w-20 md:w-24 h-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};