import React from 'react'
import './cardsMain.css'
function header({title,Paragraph}){
    return(
    
       <React.Fragment>

        <div className='divcardmain'>
            <h1>{title}</h1>

            <p>{Paragraph}</p>
        </div>
       
       </React.Fragment>
    )
}


export default header