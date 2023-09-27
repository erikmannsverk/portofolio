import { NavbarDefault } from '../components/NavbarDefault';
import Footer from '../components/Footer';
import ScrollToTop from '../assets/ScrollToTop';
import { Typography } from '@material-tailwind/react';

function ProjectDetailCannibal() {



    return (
        <>
        <ScrollToTop/>
        <NavbarDefault/>
        
        <div className="relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-36">
                <div className="max-w-2xl text-center mx-auto">
                <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">Cannibal<span className="text-blue-600"> .</span></h1>
                <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">User authentication backend with Firebase and React</p>
                </div>

                <div className="mt-10 relative max-w-5xl mx-auto">
                
                <div className='flex justify-between max-w-5xl mx-auto pt-10'>
                    <Typography variant="h6" className="uppercase text-blue-500">
                    WEB
                    </Typography>
                    <Typography variant="h6" className="uppercase text-gray-800">
                    2023
                    </Typography>
                </div>
                
                <div className='relative max-w-5xl mx-auto border-t border-blue-gray-100 pt-4'>
                    <div className="flex justify-end py-2">
                        <Typography as="a" target="_blank" href="https://cannibal.no/" className="opacity-80 transition-opacity hover:opacity-100">
                            <button className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                Link
                            </button>
                        </Typography>
                    </div>

                    <div className="w-full relative max-w-5xl mx-auto flex justify-center object-cover h-full sm:h-[480px]">
                        <img src="/images/canni_final.png"></img>
                    </div>

                    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Cannibal is a casting agency that assists in finding the right actors for the right roles. We have a database with a wide range of actors and amateurs and go to great lengths to meet the preferences of directors and producers. We have experience with both feature films, TV series, and commercials.
</p>
                </div>
                
                </div>
            </div>
        </div>
        
        <Footer/>
        </>
    )
}

export default ProjectDetailCannibal