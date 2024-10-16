import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function MovieDetailPage(){
    
    const { id } = useParams()
    const [movie, setMovie] = useState({})

    useEffect(() =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then(response => response.json())
        .then(data => {
            setMovie(data)
            console.log(data);})
        .catch(err => console.error(err))
    })


    return(
        <>
        <h1>{movie.title}</h1>
        <img src= {`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="" />
        <h1>o id do filme é : {id}</h1>
        <br></br>
        <h1>{movie.overview}</h1>
        </>
    )
}