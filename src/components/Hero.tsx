
function Hero() {
  return (

      <div className="flex justify-center">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 h-80 lg:px-8 lg:py-64 sm:py-32">

          <div className="max-w-xl lg:h-64 sm:h-32 text-center mx-auto">
            <h1 className="block font-bold text-gray-800 sm:text-4xl md:text-6xl dark:text-white">Erik Mannsverk <span className="text-blue-600 invisible lg:visible">.</span></h1>
            <div className="flex items-center justify-center mt-3 mr-5">
              <img src="/images/marker2.png" className="mr-3 h-8 w-8"></img>
              <p className="mt-1 text-xl text-gray-700 dark:text-gray-400">Copenhagen, Denmark</p>
            </div>

            
          </div>

        
        </div>
      </div>
  )
}

export default Hero