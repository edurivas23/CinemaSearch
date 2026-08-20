import { Link, useParams } from "react-router";
import { useBaner } from "../hooks/useBaner";
import { Navigate } from "react-router";



export const Hero = () => {


    const backdropUrl = "https://image.tmdb.org/t/p/original";
    const { category } = useParams()

    const { randomMovies, currentMovie } = useBaner({ category });

    const allCategories = ["upcoming", "popular", "top_rated"]


    if (!allCategories.includes(category ?? "")) {
        return <Navigate to="/404" replace />
    }


    return (
        <section className="w-full mb-10 ">
            <div className=" relative  w-full h-180 ">
                <img key={currentMovie}
                    src={`${backdropUrl}${randomMovies[currentMovie]?.backdrop_path}`} alt="Hero Image" className=" object-cover h-full w-full  mask-b-from-60% mask-b-to-100%  animate-fade-in-out" />


                <div className=" absolute bottom-30 mx-8 px-5 py-6  text-wrap max-w-3xl  bg-black/50  rounded-lg shadow-xl shadow-purple-950/50 ">

                    <h2 className="text-2xl text-white font-extrabold mb-4  ">{randomMovies[currentMovie]?.title}</h2>
                    <p className=" text-white/90 text-sm mb-4">{randomMovies[currentMovie]?.overview}</p>
                    <div className="text-yellow-300 text-md flex justify-between items-center">
                        <span>{randomMovies[currentMovie]?.vote_average.toFixed(1)} ★</span>
                        <Link to={`/movie/${randomMovies[currentMovie]?.title}`} state={{ movie: randomMovies[currentMovie] }}
                            className="text-white  bg-purple-950 rounded-md cursor px-4 py-2.5 shadow-lg shadow-black/40 cursor-pointer hover:bg-purple-900 transition ease-in">Leer Más </Link>

                    </div>
                </div>
            </div>


        </section>
    )
}
