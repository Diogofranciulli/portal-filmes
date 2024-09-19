import { Link } from "react-router-dom";

export default function MovieCard({id, titulo, imagem_destaque}) {
    return(
        <>
            <div>
                <h2 className="text-white text-sm p-5">{titulo}</h2>
                <img src={imagem_destaque} className="w-28 h-36 flex justify-between gap-5 p-3"/>
                <Link className="p-3" to={`/movies/${id}`}>Saiba Mais</Link>
            </div>
        </>
    )

}