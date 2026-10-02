import { useState } from 'react'
import Tarjeta from './components/Tarjeta'
import ListarUsuarios from './pages/ListarUsuarios'
import { Route, Routes } from 'react-router'
import Inicio from './pages/Inicio'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

function App() {
  

  return (
    <>
      {/* <ListarUsuarios/>      */}

      <Routes>
        <Route path="/" element={ <Inicio></Inicio> }></Route>
        <Route path="/usuarios" element={ <ListarUsuarios/> }></Route>
      </Routes>
    </>
  )
}

export default App
