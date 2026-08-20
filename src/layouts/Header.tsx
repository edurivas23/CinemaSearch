import { FilmIcon, HomeIcon, Search, Star, TrendingUp } from "lucide-react"
import { NavLink, useNavigate } from "react-router"


export const Header = () => {

    const navigate = useNavigate()
    return (
        <>
            <header className="w-full max-h-24 border-b-4 border-purple-950/80 bg-black/90 flex justify-evenly items-center p-5 text-center fixed inset-0 z-10 backdrop-blur-md">
                <div className="flex h-full items-center gap-10 max-w-2xl">
                    <div className="flex  gap-2 text-center text-2xl items-center text-white">
                        <FilmIcon className="text-purple-700 size-8 " />
                        <h1 className="text-center  cursor-default">CinemaSearch</h1>
                    </div>
                    <nav className=" flex h-full items-center text-lg" >
                        <ul className="flex  gap-10  decoration-none  text-white ">



                            <li >
                                <NavLink to="/upcoming" end className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive ? 'text-purple-400' : 'hover:text-purple-400'}`
                                }>
                                    <HomeIcon />
                                    Inicio
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to="/popular" end className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive ? 'text-purple-400' : 'hover:text-purple-400'}`
                                }>
                                    <Star />
                                    Populares</NavLink>
                            </li>
                            <li >
                                <NavLink to="/top_rated" end className={({ isActive }) =>
                                    `flex items-center gap-2 ${isActive ? 'text-purple-400' : 'hover:text-purple-400'}`
                                }>
                                    <TrendingUp />
                                    Mejores Valoradas</NavLink>
                            </li>


                        </ul>
                    </nav>
                </div>
                <button onClick={() => { navigate("/search") }} className="text-white cursor-pointer hover:text-purple-400 transition-all hover:scale-105 ">
                    <Search size={30} />
                </button>




            </header>




        </>
    )
}
