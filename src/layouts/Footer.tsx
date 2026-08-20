import { FilmIcon } from "lucide-react"
export const Footer = () => {
    return (
        <footer className=" bg-black  size-full border-t-2 ">
            <div className=" flex justify-evenly min-h-30 items-center text-sm text-white/60 mx-auto p-5">
                <div className="flex gap-2 items-center">
                    <FilmIcon className="text-purple-400" />
                    <p>CinemaHouse @ 2026</p>
                </div>
                <p>Encuentra todo lo que quieras ver</p>
            </div>
        </footer>
    )
}