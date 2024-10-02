export default function Login ({isLogged, handleLogin}){

    
    return(
        <div className="flex gap-4 items-center">
            {isLogged && <p>Olá, usuário</p>}
            <button
                className="bg-white text-purple-800 px-4 py-1 rounded"
                onClick={handleLogin}>
                {isLogged ? "Logout" : "Login"}
                </button>
            
        </div>
        
    )
}

