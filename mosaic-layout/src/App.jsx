export default function App() {
  return (
    <div className="min-h-screen w-full bg-gray-300 overflow-auto">
      {/* Layout for larger screens (>= 1024px) */}
      <div className="hidden lg:flex p-8 gap-8 justify-center">
        <div className="flex flex-col gap-8 flex-none">
          <div className="w-80 h-24 bg-white flex justify-center items-center">
            Widget 1
          </div>
          <div className="w-80 h-72 bg-white flex justify-center items-center">
            Widget 4
          </div>
        </div>

        <div className="flex flex-col gap-8 flex-none">
          <div className="w-80 h-56 bg-white flex justify-center items-center">
            Widget 2
          </div>
          <div className="w-80 h-20 bg-white flex justify-center items-center">
            Widget 5
          </div>
        </div>

        <div className="flex flex-col gap-8 flex-none">
          <div className="w-80 h-44 bg-orange-300 flex justify-center items-center">
            Widget 3
          </div>
          <div className="w-80 h-44 bg-orange-300 flex justify-center items-center">
            Widget 6
          </div>
        </div>
      </div>

      {/* Layout for smaller screens (< 1024px) */}
      <div className="lg:hidden p-11 flex sm:flex-row gap-6 justify-start overflow-auto">
        <div className="flex flex-col gap-8 flex-none">
          <div className="w-80 h-24 bg-white flex justify-center items-center">
            Widget 1
          </div>
          <div className="w-80 h-72 bg-white flex justify-center items-center">
            Widget 4
          </div>
          <div className="w-80 h-44 bg-orange-300 flex justify-center items-center">
            Widget 3
          </div>
        </div>

        <div className="flex flex-col gap-8 flex-none">
          <div className="w-80 h-56 bg-white flex justify-center items-center">
            Widget 2
          </div>
          <div className="w-80 h-20 bg-white flex justify-center items-center">
            Widget 5
          </div>
          <div className="w-80 h-44 bg-orange-300 flex justify-center items-center">
            Widget 6
          </div>
        </div>
      </div>
    </div>
  );
}
