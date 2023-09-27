
function Hero() {
  return (

      <div className="flex justify-center">
        <div className="max-w-[85rem] mx-auto px-6 h-48 lg:px-8 lg:py-40 py-20">

          <div className="max-w-xl lg:h-64 h-48 text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-2xl lg:text-5xl dark:text-white">Erik Mannsverk <span className="text-blue-600 invisible lg:visible">.</span></h1>
            <div className="flex items-center justify-center mt-3 mr-5">
              <img src="/images/marker2.png" className="lg:mr-3 mr-1 mt-1 lg:h-6 lg:w-6 h-4 w-4"></img>
              <p className="mt-1 lg:text-xl texl-lg text-gray-700 dark:text-gray-400">Copenhagen, Denmark</p>
            </div>

            
          </div>

        
        </div>
      </div>
  )
}

export default Hero