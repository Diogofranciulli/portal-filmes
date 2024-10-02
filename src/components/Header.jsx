import { NavLink } from "react-router-dom";
import Login from "./Login"
import { useState } from "react";

export default function Header(){

    const [isLogged, setIsLogged] = useState(false)
    const handleLogin = () =>{
        setIsLogged(!isLogged)
    }

    return(
        <>
            <header className="bg-indigo-800 flex justify-around p-5 h-14 items-center">
                <div>
                    <h1 className="portal text-white">Portal Filmes</h1>
                </div>
                <nav>
                    <ul className="flex gap-4 text-white">
                        <li><NavLink to = "/">Home</NavLink></li>
                        <li><NavLink to = "/movies">Filmes</NavLink></li>
                        <li><NavLink to = "/genre">Gêneros</NavLink></li>
                        <li><NavLink to = "/contato">Contato</NavLink></li>
                        {isLogged && <li><NavLink to = "/settings">Configurações</NavLink></li> }
                        
                    </ul>
                </nav>
                <Login isLogged= {isLogged} handleLogin = {handleLogin}/>
            </header>
        </>
    )
}