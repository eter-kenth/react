import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header.jsx'
import CardsMain from './cardsMain.jsx'
import Skills from './skills.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <header>
    <Header/>
    </header>

    <main>
      <CardsMain title={"Acerca de mi"} Paragraph={"Soy un estudiante apasionado por la Ingeniería y el desarrollo, nacido en 2004 y actualmente residiendo en Managua, Nicaragua. Mi experiencia abarca diversos lenguajes de programación y gestores de bases de datos, lo que me ha permitido desarrollar soluciones creativas y eficientes. Soy conocido por mi carisma y mi habilidad para trabajar en equipo,    valorando la comunicación efectiva y la colaboración para alcanzar objetivos comunes.  Siempre estoy motivado por aprender nuevas tecnologías relacionadas con el desarrollo, manteniéndome al día con las últimas tendencias y buscando mejorar continuamente mis  habilidades y conocimientos."}/>
      <CardsMain title={"Educacion"} Paragraph={"Estudie en el colegio Mi Redentor primaria y secundaria graduandome de primaria en el año 2015 y posteriormente despues de 5 años graduandome de secundaria en el año 2020, actualmente curso tercer año de ingenieria en computacion en la Universidad Nacional Politecnica (UNP) en Managua Nicaragua, iniciando mis estudios en esta alma mater en el año 2022."}/>
    </main>
    <div className='divF'>
    <Skills/>
    </div>
    
  </React.StrictMode>,
)
