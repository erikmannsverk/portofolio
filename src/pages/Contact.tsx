import { Button } from "@material-tailwind/react"
import Footer from "../components/Footer"
import { NavbarDefault } from "../components/NavbarDefault"
import ScrollToTop from "../assets/ScrollToTop"

function Contact() {
  return (
    <>
      <ScrollToTop/>
      <NavbarDefault/>
          <div className="flex flex-col text-center w-full mb-12 py-24">
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">Contact Me <span className="text-blue-600">.</span></h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Not working yet.
            </p>
            <div className="flex justify-center mt-5">
            <a target="_blank" href="https://github.com/erikmannsverk/portofolio" className="opacity-60 hover:scale-105 hover:opacity-80 ease-in-out duration-300">
              <img src="/images/github.png" className="mx-2 md:h-5 md:w-5 lg:h-6 lg:w-6 h-4 w-4"></img>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/erik-mannsverk/" className="opacity-60 hover:scale-105 hover:opacity-80 ease-in-out duration-300">
              <img src="/images/linkedin.png" className="mx-2 md:h-5 md:w-5 lg:h-6 lg:w-6 h-4 w-4"></img>
            </a>
          </div>
          </div>

      

          <div className="lg:w-1/2 w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full flex justify-center py-16">
                <Button variant="text" className="flex bg-white items-center gap-2">
                    Send
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-6 w-6"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                    </svg>
                </Button>
              </div>
          </div>
          </div>
      <Footer/>
    </>
  )
}

export default Contact