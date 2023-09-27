
import { NavLink } from "react-router-dom";

interface LinkNavProps {
    linkName: string;
    title: string;
}

function LinkNav({linkName, title}:LinkNavProps){
    return(
        <div className='w-32 h-8'>
            <NavLink 
                className={({ isActive }) => (isActive ? 'text-gray-700' : 'text-gray-500')}
                to={"/"+linkName}>
                    <p className='text-center items-center font-sans text-xl  tracking-wide'>
                    {title}
                    </p>
            </NavLink>
        </div>
 

    )
}

export default LinkNav