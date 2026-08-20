import { NavLink } from "react-router"
import { HomeIcon, Star, TrendingUp } from "lucide-react"
export const SearchHeader = () => {
    return (
        <>
            <div className="h-24">
                <header className="w-full  max-h-20 border-b-4 border-purple-950/80 bg-black/90 flex justify-evenly items-center p-5 text-center fixed inset-0 z-10 backdrop-blur-md">
                    <div className="flex h-full items-center gap-10 w-full max-w-5xl">

                        <nav className=" flex h-full items-center text-lg w-full " >
                            <ul className="flex justify-center gap-10 decoration-none w-full text-white ">

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






                </header>
            </div>



        </>
    )
}
