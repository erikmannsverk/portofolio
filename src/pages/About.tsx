import ScrollToTop from "../assets/ScrollToTop"
import Footer from "../components/Footer"
import { NavbarDefault } from "../components/NavbarDefault"


function About() {
  return (
    <>
      <ScrollToTop/>
      <NavbarDefault/>
      
      <div className="lg:w-1/2 w-2/3 mx-auto pt-10">

        <div className="pt-4">
          <img
              src="/images/about-min.png"
              alt="Transparent Image"
              className="h-full w-full object-cover  rounded-3xl"
          />
        </div>

        <div className="flex flex-col items-center justify-center h-64">
            <h1 className="block lg:text-4xl font-bold text-gray-800 md:text-3xl text-2xl dark:text-white">Erik Mannsverk,  <span className="font-bold text-gray-500">22</span><span className="text-blue-500"> .</span></h1>
            <p className="mt-3 lg:text-sm text-xs uppercase text-gray-800">Full Stack Developer and finance student </p>
        </div>

        <div className="w-full text-start mx-auto">
          <h1 className="block lg:text-3xl font-bold text-gray-800 md:text-xl text-lg dark:text-white">Hi Again <span className="text-blue-600">.</span></h1>
          <p className="mt-3 lg:text-lg text-base text-gray-800 dark:text-gray-400">Motivated and dedicated student who has always had a passion for understanding how things work. I am currently working part-time as a full-stack developer, with experience in both frontend and backend development.</p>
          <p className="mt-3 lg:text-lg text-base text-gray-800 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor vestibulum magna, at posuere augue tempus nec. 
Vestibulum convallis lectus vitae ligula tempus, eu laoreet purus lacinia. Sed auctor pharetra enim, sit amet pharetra libero mattis id. Quisque euismod elit at lectus lacinia, non varius turpis euismod. Fusce commodo nulla ac arcu scelerisque, nec rhoncus justo ultricies. Curabitur efficitur nibh eget dolor hendrerit, sed posuere velit tristique. Nulla facilisi. Nullam eu urna vel arcu facilisis elementum. Aliquam in consectetur nulla. Vivamus tristique tincidunt felis, in dictum odio. Suspendisse vitae sapien vitae libero lobortis feugiat.</p>
        </div>
        
        
      </div>
      <Footer/>
    </>
  )
}

export default About