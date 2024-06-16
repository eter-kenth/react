import React from 'react'
import './header.css'


function header(){
    return(
    
       <React.Fragment>

        <header className='header-n-f'>
         <div className='primerDiv'>
           <div className='segundoDiv'>
             <h1 className='nombre'>kenneth Gabriel Flores Saballos</h1>
             <p><strong>Estudiante de ing en computacion</strong></p>
           </div>

           <div className='tercerDiv'>
            <img src="kenneth.jpg" alt="" />
           </div>
          </div>
        </header>

        <main>
            <p id='pdm'>Estudiante de ing Computacion en la universidad nacional politecnica <strong>UNP</strong></p>
            <p id='pdm'><strong>Managua</strong></p>
            <p id='pdm'><strong>Nicaragua</strong></p>
        </main>

        <footer >

          <a href="https://github.com/eter-kenth" target="_blank" title="githud de kenneth">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#000000"  stroke-width="2"  stroke-linecap="round" 
                    stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path 
                    d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 
                    12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                    </svg>
          </a>

          <a href="https://www.instagram.com/kenth.et/" target="_blank" title="githud de kenneth">


                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#000000"  stroke-width="2" 
                    stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" 
                    d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M16.5 7.5l0 .01" />
                    </svg>
          </a>
            
        </footer>

       
       
       </React.Fragment>
    )
}


export default header