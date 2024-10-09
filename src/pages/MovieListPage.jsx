import { useState, useEffect} from "react";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json"
export default function MovieListPage(){

    const [search, setSearch] = useState("")
    const [filmes, setfilmes] = useState([])


    useEffect(() =>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR')
            .then(res => res.json())
            .then(res => setfilmes(res.results))
            .catch(erro => console.log(erro))
            .finally(()=> console.log("fim!"))
    }, [])

    
    

    const handleSearch = (e) =>{
        setSearch(e.target.value)
        console.log(search);
    }
    const filmesFiltrados = movies.filter(filme => (
        filme.titulo.toLowerCase().includes(search.toLowerCase())
    ))
    return(
        <>
        <h1>Veja o catalago de filmes</h1>
        <input
         className="text-black"
         type="text"
         name="search"
         id="search"
         value={search}
         onChange={handleSearch} />
         <section className="flex">
         
            <section className="flex">
                {
                    filmes.map(filme =>(
                        <>
                        <h1>{filme.title}</h1>
                        <img src ={`https://image.tmdb.org/t/p/w92${filme.poster_path}`}/>
                        
                     </>
                    ))
                        
                }
            </section>


         </section>    
        </>
    )
}