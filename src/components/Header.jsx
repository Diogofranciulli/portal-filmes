import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <>
            <header className="bg-indigo-800 flex justify-between p-8">
                <div>
                    <h1 className="portal">Portal Filmes</h1>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to = "/">Home</NavLink></li>
                        <li><NavLink to = "/movies">Filmes</NavLink></li>
                        <li><NavLink to = "/genre">Gêneros</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}