import { useState } from 'react'
import Header from './componentes/header'
import Fooder from './componentes/Fooder'
import Quienes_somos from './componentes/Quies_somos'
import Problema from './componentes/Probema'
import Impacto from './componentes/Impacto'
import Soluciones from './componentes/Soluciones'
import Comentarios from './componentes/Comentarios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Quienes_somos/>
    <Problema/>
    <Impacto/>
    <Soluciones/>
    <Comentarios/>
    <Fooder/>
    </>
  )
}

export default App
