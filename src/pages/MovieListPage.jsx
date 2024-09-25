import { useState } from "react";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies.json"
export default function MovieListPage(){
    //  const [contador, setContador] = useState(0)
    //  const [textoBotao, settextoBotao] = useState('teste')
    // const handleClick = () =>{
    //     setContador((prev)=>(
    //         prev + 1
    //     ))
    //     console.log(contador +1);
    // }
    // const diminuiClick = () =>{
    //     setContador((prev)=>(
    //         prev - 1
    //     ))
    //     console.log(contador - 1);
    // }
    // const zerarClick = () =>{
    //     setContador((prev)=>(
    //         prev * 0
    //     ))
    //     console.log(contador );
    // }
    
    // const trocaPalavra = () =>{
    //     settextoBotao((prev) => (prev === 'flaco' ? 'Lopes':'flaco'));
    // }
    const [search, setSearch] = useState("")
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
{ 
            filmesFiltrados.map(filme => (
                <MovieCard key ={filme.id} {...filme}/>
            ))
        }

         </section>
         
        {/* <p>{contador}</p>
        <button  onClick={ handleClick }>Aumentar</button><br></br>
        <button onClick={ diminuiClick }>diminuir</button><br></br>
        <button onClick={ zerarClick }>zerar</button><br></br>  

        <p>{textoBotao}</p>
        <button onClick={ trocaPalavra }>troque a palavra</button> */}
        </>
    )
}