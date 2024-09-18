import { Link } from "react-router-dom";

export default function MovieCard({id, titulo, imagem_destaque}) {
    return(
        <>
            <div>
                <h2 className="text-white text-sm">{titulo}</h2>
                <img src={imagem_destaque} className="w-28 h-36 flex justify-between gap-5"/>
                <Link to={`/movies/${id}`}>Saiba Mais</Link>
            </div>
        </>
    )

}