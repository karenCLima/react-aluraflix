import GlobalStyles from './componentes/GlobalStyles'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InitialPage from './Pages/InitialPage';
import Home from './Pages/Home'
import CriarVideo from './Pages/CriarVideo'
import { useEffect, useState } from "react";


function App() {
  
  const [categorias, setCategorias] = useState([
    {
        id:1,
        categoria:"front end",
        color:"#6BD1FF"
    },
    {
        id:2,
        categoria:"back end",
        color:"#00C86F"
    },
    {
        id:3,
        categoria:"mobile",
        color:"#FFBA05"
    }
])

const [videos, setVideos] = useState([])

useEffect(()=>{
    fetch('http://localhost:3000/videos')
    .then(resposta => resposta.json())
    .then(dados =>{
        setVideos(dados)
    }, [])
})

  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Routes>
        
        <Route path="/" element={<InitialPage/>}>
            <Route index element={<Home categorias={categorias} videos={videos}/>}></Route>
            <Route path="criar-video" element={<CriarVideo categorias={categorias}/>} />
        </Route>

      </Routes>
      
    </BrowserRouter>
  )
}

export default App
