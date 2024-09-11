import { useParams } from "react-router-dom"

export default function MovieListPage(){

    const {id} = useParams()
    return(
        <>
        <h1>Movie List Page</h1>
        <p>o id do filme é {id}</p>
        {/* Exibe a lista de todos os filmes disponíveis categorizados por gênero.
        Cada filme na lista é mostrado com uma imagem, 
        título e um link para a página de detalhes do filme.*/}
        </>
    )
}