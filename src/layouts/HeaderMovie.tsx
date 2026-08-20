import {  NavLink, useNavigate } from "react-router"
import { HomeIcon, Star, TrendingUp, ArrowLeft } from "lucide-react"

export const HeaderMovie = () => {
    const navigate = useNavigate()

    return (
        <>
            <header className=" max-h-24 border-b-4 border-purple-950/80 bg-black/90 flex items-center p-5 text-center  ">
                <div className="flex h-full w-full items-center gap-20 justify-between  py-2">
                    <button  onClick ={()=> navigate(-1)} className="flex  gap-2 text-center text-2xl items-center text-white cursor-pointer hover:text-purple-200">

                        <ArrowLeft className="size-8 " />
                    </button>
                    <nav className=" flex h-full items-center text-lg" >
                        <ul className="flex  gap-10  decoration-none  text-white ">
                            <li >
                                <NavLink to="/" className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive ? 'text-purple-400' : 'hover:text-purple-400'}`
                                }>
                                    <HomeIcon />
                                    Inicio</NavLink>
                            </li>
                            <li >
                                <NavLink to="/popular" className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive ? 'text-purple-400' : 'hover:text-purple-400'}`
                                }>
                                    <Star />
                                    Populares</NavLink>
                            </li>
                            <li >
                                <NavLink to="/top_rated" className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive ? 'text-purple-400' : 'hover:text-purple-400'}`
                                }>
                                    <TrendingUp />
                                    Mejores Valoradas</NavLink>
                            </li>


                        </ul>
                    </nav>
                </div>

            </header>




        </>
    )
}
