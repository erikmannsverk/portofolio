import {
    Card,
    Typography,
    Button,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

interface Project {
    id: number,
    title: string,
    category: string,
    role: string,
    year: string,
    description: string,
    img: string,
    mock1: string,
    mock2: string,
    techstack: string[],
    link: string,
}

interface ProjectsProps {
    project: Project;
}

export function HorizontalCard({project}: ProjectsProps) {


    return (
        <NavLink className='nav-link' to={`/${project.title}`}>
            <div className="my-32 lg:h-1/4 sm:h-1/3 flex justify-center">
            <Card className="w-full bg-blue-gray-50 shadow-none w-90% lg:flex-row sm:flex-col rounded-3xl hover:transform hover:shadow-lg hover:scale-105 transition ease-in-out duration-500">
                <div className="lg:w-1/2 lg:h-full sm:h-1/2 lg:pt-8 overflow-hidden items-center px-2  shrink-0">
                    <img
                        src={`images/${project.img}`}
                        alt="Transparent Image"
                        className="h-full w-full object-cover"
                    />
                    </div>
                <div className="lg:w-1/2 lg:h-full sm:h-1/2 lg:pt-24 pt-2 px-12">
                {/*<h1 className="block font-bold text-gray-800 sm:text-4xl md:text-6xl dark:text-white">Erik Mannsverk <span className="text-blue-600 invisible lg:visible">.</span></h1>*/}
                    <Typography variant="h6" className="mb-2 uppercase text-blue-500">
                    {project.category}
                    </Typography>
                    <Typography variant="h1" className="lg:mb-14 md:text-5xl font-bold text-gray-800">
                    {project.title}
                    </Typography>
                    
                    <Typography variant="h4" className="lg:mb-8 sm:mb-4 font-normal lg:h-24 sm:h-16 text-gray-600">
                    {project.description}
                    </Typography>

                    <NavLink className='nav-link' to={`/${project.title}`}>
                        <Button variant="text" className="flex bg-gray-50 items-center lg:gap-2">
                            More
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                            </svg>
                        </Button>
                    </NavLink>
                </div>
            </Card>
            </div>

        </NavLink>
        
    );
}