export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Express Your Style With <span className="text-blue-500">StreetStyle</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Premium quality t-shirts with unique designs for fashion-forward individuals. 
            Stand out from the crowd with our exclusive collections.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Shop Now
            </button>
            <button className="bg-transparent hover:bg-white hover:text-black text-white font-bold py-3 px-8 border-2 border-white rounded-lg transition duration-300">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}