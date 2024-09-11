import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider  } from 'react-router-dom'
import GenreListPage  from './pages/GenreListPage.jsx'
import MovieDetailPage  from './pages/MovieDetailPage.jsx'
import MovielistPage  from './pages/MovieListPage.jsx'
import Home from './pages/Home.jsx'
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'


const router  =createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {index: true, element: <Home/>},
      {path: "/genre", element: <GenreListPage/>},
      {path: "/details", element: <MovieDetailPage/>},
      {path: "/movies", element: <MovielistPage/>},
      {path: "/movies/:id", element: <MovielistPage/>},
      {path: "/moviegenre", element: <MoviesByGenrePage/>},
      {path: "/moviegenre/:id", element: <MoviesByGenrePage/>},
      {path: "*", element: <PageNotFound/>}
    ]
},
{
  
}
])
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
{/* Deve ter as rotas:
  home
  filmes
  Detalhes do Filme
  Lista de gêneros
  Filmes por gênero
  Page Not Found
  */}

