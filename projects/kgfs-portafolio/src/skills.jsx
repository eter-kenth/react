import React from 'react'
import './skills.css'

function header(){
    return(
    
       <React.Fragment>

        <div className='todo'>
        <div className='principal'>
          <div className='divTitulo'>
            <h1>
                Habilidades
            </h1>
          </div>
        </div>

        <article className='articleCards1'>

            <div id='divCards'>
            <img src="c++.png" alt="" />
            </div>

            <div id='divCards'>
                <img src="c.png" alt="" />
            </div>
           
            <div id='divCards'>
                <img src="java.png" alt="" />        
            </div>
            <div id='divCards'>
                <img src="csharp.png" alt="" />
                
            </div>
        </article>
        <article className='articleCards1'>

            <div id='divCards'>
             <img src="html.png" alt="" />
            </div>

            <div id='divCards'>
             <img src="css.png" alt="" />
            </div>

            <div id='divCards'>
             <img src="js.png" alt="" />        
            </div>
            <div id='divCards'>
             <img src="git.png" alt="" />
            </div>
         </article>

         <article className='articleCards3'>

         <div id='divCards'>
             <img src="astro.png" alt="" />
         </div>
         <div id='divCards'>
             <img src="tailwind.png" alt="" />
         </div>
         <div id='divCards'>
             <img src="react2.jpeg" alt="" />
         </div>

         </article>
        

        </div>
      
       

       

       </React.Fragment>
    )
}


export default header