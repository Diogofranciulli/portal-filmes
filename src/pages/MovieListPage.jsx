import { useState, useEffect} from "react";
import MovieCard from "../components/MovieCard";
import 'ldrs/ring'
import 'ldrs/dotSpinner'

// Default values shown  

export default function MovieListPage(){


    const [search, setSearch] = useState("")
    const [filmes, setfilmes] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    

    useEffect(() =>{
        setIsLoading(true)
        setTimeout(() =>{
            fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR')
                .then(res => res.json())
                .then(res => setfilmes(res.results))
                .catch(erro => console.log(erro))
                .finally(()=> setIsLoading(false))
            
                },5000)
            }, []);



    
    
    

    const handleSearch = (e) =>{
        setSearch(e.target.value)
        console.log(search);
    }
    const filmesFiltrados = filmes.filter(filme => (
        filme.title.toLowerCase().includes(search.toLowerCase())
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
                {
                    isLoading ? <l-dot-spinner
                    size="100"
                    speed="1.5"
                    color="white" 
                  ></l-dot-spinner>
                    :
                    filmesFiltrados.length > 0 ?

                        filmesFiltrados
                            .map(filme => (
                                <MovieCard key = {filme.id} {...filme}/>
                            ))
                        :
                        <p>Filme nao encontrado</p>
                }
            </section>
  
        </>
    )
}