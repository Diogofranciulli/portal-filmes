import { Link } from "react-router-dom";

export default function MovieCard({id, title, poster_path}) {
    return(
        <>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-white text-sm p-5">{title}</h2>
                <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} className="w-28 h-36 flex justify-between gap-5 p-3"/>
                <Link className="p-2 bg-purple-800 rounded-3xl" to={`/movies/${id}`}>Saiba Mais</Link>
            </div>
        </>
    )

}