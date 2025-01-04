export const Companies = () => {
  return (
    <div className="flex justify-between px-36 text-gray-100 py-6">
      <div>
        <p className="text-2xl font-bold">970k+ More</p>
        <p>Trusted Companies Partner</p>
      </div>
      <div className="flex gap-12">
        <img 
          src="/videoask.png" 
          alt="Videoask Logo" 
          className="w-24 h-auto object-contain"
        />
        <img 
          src="/hubspot.png" 
          alt="Hubspot Logo" 
          className="w-24 h-auto object-contain"
        />
        <img 
          src="/mapbox.png" 
          alt="Mapbox Logo" 
          className="w-24 h-auto object-contain"
        />
      </div>
    </div>
  )
}
